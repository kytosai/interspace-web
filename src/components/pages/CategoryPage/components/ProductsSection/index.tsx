import { getProducts } from '@/services/api/getProducts';
import { ProductItem } from '@/types/product';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { ProductsSectionProps } from './types';
import styles from './styles.module.scss';
import IconSort from '@/components/icons/IconSort';
import ProductItemCard from '@/components/shared/ProductItemCard';
import ProductItemCardSkeleton from '@/components/shared/ProductItemCardSkeleton';

const ProductsSection = (props: ProductsSectionProps) => {
  const { isValidCategory, category } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<ProductItem[]>([]);
  const isComponentMounted = useRef(false);
  const router = useRouter();

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
          _limit: 20,
        });
        setProductList(respGetProducts.data);
      } catch (error) {
        console.log(error);
        setProductList([]);
      }
      setIsLoading(false);
    })();
  }, [router.query]);

  return (
    <section className={styles.productSection}>
      <div className={styles.mobileHeadBar}>
        <h1 className={styles.categoryTitle}>{category.category_name}</h1>
        <button className={styles.sortBtn}>
          <div className={styles.sortBtnIcon}>
            <IconSort />
          </div>
          <div className={styles.sortBtnLabel}>Sort by</div>
        </button>
      </div>

      {!isLoading && productList.length <= 0 && <>Empty product in category</>}

      <div className={styles.productRows}>
        {isLoading ? (
          <>
            {Array.from(new Array(12)).map((_, idx) => {
              return (
                <div className={styles.productCol} key={idx}>
                  <ProductItemCardSkeleton />
                </div>
              );
            })}
          </>
        ) : (
          <>
            {productList.map((productItem) => {
              return (
                <div className={styles.productCol} key={productItem.id}>
                  <ProductItemCard productItem={productItem} />
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
