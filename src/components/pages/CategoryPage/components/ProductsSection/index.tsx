import IconGrid from '@/components/icons/IconGrid';
import IconList from '@/components/icons/IconList';
import IconSolidArrowDown from '@/components/icons/IconSolidArrowDown';
import IconSort from '@/components/icons/IconSort';
import Alert from '@/components/shared/Alert';
import ProductItemCard from '@/components/shared/ProductItemCard';
import ProductItemCardHorizontal from '@/components/shared/ProductItemCardHorizontal';
import ProductItemCardSkeleton from '@/components/shared/ProductItemCardSkeleton';
import ProductItemCardSkeletonHorizontal from '@/components/shared/ProductItemCardSkeletonHorizontal';
import { getProducts } from '@/services/api/getProducts';
import { SortByType } from '@/services/api/getProducts/types';
import { useAppDispatch, useAppSelector } from '@/store';
import { categoryActions, categorySelectors } from '@/store/categorySlice';
import { ProductItem } from '@/types/product';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { ProductsSectionProps } from './types';

const fakeFilteredList = [
  {
    name: 'worldwide shipping',
  },
  {
    name: 'under $50',
  },
  {
    name: 'kitten',
  },
  {
    name: 'plastic plugs',
  },
  {
    name: 'pucker shoes',
  },
  {
    name: 'vintage typewriter',
  },
];

const sortByList: { key: SortByType; name: string }[] = [
  {
    key: 'recommended',
    name: 'Recommended',
  },
  {
    key: 'created_at',
    name: 'Recent add',
  },
  {
    key: 'price_asc',
    name: 'Price',
  },
];

const ProductsSection = (props: ProductsSectionProps) => {
  const { isValidCategory, category } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<ProductItem[]>([]);
  const productLayout = useAppSelector(categorySelectors.getProductLayout);
  const isComponentMounted = useRef(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const sortBy = useMemo<SortByType>(() => {
    return (router.query.sort_by as SortByType) ?? 'recommended';
  }, [router.query.sort_by]);

  useEffect(() => {
    isComponentMounted.current = true;

    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isValidCategory || !isComponentMounted.current) return;

    (async () => {
      setIsLoading(true);
      try {
        const respGetProducts = await getProducts({
          category_id: category?.id,
          sort_by: sortBy,
          _limit: 20,
        });

        if (!isComponentMounted.current) return;

        setProductList(respGetProducts.data);
      } catch (error) {
        console.log(error);
        if (!isComponentMounted.current) return;
        setProductList([]);
      }
      setIsLoading(false);
    })();
  }, [router.query, sortBy]);

  const handleOnChangeSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === sortBy) return;
    router.push(
      {
        pathname: router.pathname,
        query: {
          slug: router.query.slug,
          sort_by: e.target.value,
        },
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  return (
    <section className={styles.productSection}>
      <div className={styles.mobileHeadBar}>
        <h1 className={styles.categoryTitle}>{category.category_name}</h1>

        {productList.length > 0 && (
          <button className={styles.sortBtn}>
            <div className={styles.sortBtnIcon}>
              <IconSort />
            </div>
            <div className={styles.sortBtnLabel}>Sort by</div>
          </button>
        )}
      </div>

      <div className={styles.sortByBar}>
        <div className={styles.sortField}>
          <div className={styles.sortFieldLabel}>Sort by</div>
          <select
            className={styles.sortSelectbox}
            onChange={handleOnChangeSortBy}
            value={sortBy}
            disabled={isLoading || productList.length <= 0}
          >
            {sortByList.map((item) => {
              return (
                <option key={item.key} value={item.key}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <div className={styles.sortSelectboxIcon}>
            <IconSolidArrowDown />
          </div>
        </div>

        <div className={styles.changeLayoutField}>
          <button
            className={clsx(styles.changeLayoutBtn, {
              [styles.changeLayoutBtnActived]: productLayout === 'list',
            })}
            onClick={() => dispatch(categoryActions.changeProductLayout('list'))}
          >
            <IconList />
          </button>

          <button
            className={clsx(styles.changeLayoutBtn, {
              [styles.changeLayoutBtnActived]: productLayout === 'grid',
            })}
            onClick={() => dispatch(categoryActions.changeProductLayout('grid'))}
          >
            <IconGrid />
          </button>
        </div>
      </div>

      <div className={styles.filteredBar}>
        <div className={styles.filteredBarLabel}>Related</div>

        {fakeFilteredList.map((filterItem) => {
          return (
            <Link key={filterItem.name} href="/" className={styles.filteredItem}>
              {filterItem.name}
            </Link>
          );
        })}
      </div>

      {!isLoading && productList.length <= 0 && (
        <Alert variant="warning" classNames="mb-0">
          Empty product here, please try with other filter or category
        </Alert>
      )}

      <div
        className={clsx(styles.productRows, {
          [styles.isProductRowsList]: productLayout === 'list',
        })}
      >
        {isLoading ? (
          <>
            {Array.from(new Array(12)).map((_, idx) => {
              return (
                <div className={styles.productCol} key={idx}>
                  {productLayout === 'list' ? (
                    <ProductItemCardSkeletonHorizontal />
                  ) : (
                    <ProductItemCardSkeleton />
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <>
            {productList.map((productItem) => {
              return (
                <div className={styles.productCol} key={productItem.id}>
                  {productLayout === 'list' ? (
                    <ProductItemCardHorizontal productItem={productItem} />
                  ) : (
                    <ProductItemCard productItem={productItem} />
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
