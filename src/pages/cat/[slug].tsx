import IconLinesArrowDown from '@/components/icons/IconLinesArrowDown';
import IconMenuHambuger from '@/components/icons/IconMenuHambuger';
import MainLayout from '@/components/layouts/MainLayout';
import DepartmentsModal from '@/components/pages/CategoryPage/components/DepartmentsModal';
import FilterGroupBox from '@/components/pages/CategoryPage/components/FilterGroupBox';
import ProductsSection from '@/components/pages/CategoryPage/components/ProductsSection';
import styles from '@/components/pages/CategoryPage/styles.module.scss';
import { CategoryPageProps } from '@/components/pages/CategoryPage/types';
import Alert from '@/components/shared/Alert';
import { formatPageHeadTitle } from '@/helpers/pageHeadTitleHelper';
import { getLastIdFromSlug } from '@/helpers/urlHelper';
import { getCategoriesTree } from '@/services/api/getCategoriesTree';
import { getCategory } from '@/services/api/getCategory';
import { getFilters } from '@/services/api/getFilters';
import { CategoryItem } from '@/types/category';
import { NextPageExtended } from '@/types/common';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import { useState } from 'react';

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<CategoryPageProps>> {
  const slug = (context.params?.slug as string) ?? '';
  const categoryId = getLastIdFromSlug(slug);

  if (!categoryId) {
    return {
      props: {
        isValidCategory: false,
        categoryId,
        respCategory: null,
        respCategories: null,
        respFilters: null,
      },
    };
  }

  try {
    const [respCategory, respFilters, respCategories] = await Promise.all([
      getCategory({ id: categoryId }),
      getFilters(),
      getCategoriesTree(),
    ]);

    if (!respCategory.data.category_name) {
      return {
        props: {
          isValidCategory: false,
          categoryId,
          respCategory: null,
          respCategories: null,
          respFilters: null,
        },
      };
    }

    return {
      props: {
        isValidCategory: true,
        categoryId,
        respCategory: respCategory.data,
        respCategories: respCategories.data,
        respFilters: respFilters.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        isValidCategory: false,
        categoryId,
        respCategories: null,
        respCategory: null,
        respFilters: null,
      },
    };
  }
}

const CategoryPage: NextPageExtended = (props: CategoryPageProps) => {
  const { isValidCategory, categoryId, respCategories, respCategory, respFilters } =
    props;
  const pageHeadTitle = formatPageHeadTitle(respCategory?.category_name ?? 'Category');
  const [isOpenDeparmentsModal, setIsOpenDeparmentsModal] = useState(false);

  if (!isValidCategory) {
    return (
      <>
        <Head>
          <title>{pageHeadTitle}</title>
        </Head>

        <main className={styles.mainPage}>
          <div className="container">
            <Alert variant="warning" classNames="mb-0">
              Cannot get category info! Please try again later!
            </Alert>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{pageHeadTitle}</title>
      </Head>

      <main className={styles.mainPage}>
        <div className="container">
          <div className={styles.mainPageInner}>
            <div className={styles.sidebarCol}>
              <button
                className={styles.openDepartmentBtn}
                onClick={() => setIsOpenDeparmentsModal(true)}
              >
                <span className={styles.openDepartmentBtnIcon}>
                  <IconLinesArrowDown />
                </span>

                <span className={styles.openDepartmentBtnLabel}>Departments</span>
              </button>

              {respFilters?.map((item) => {
                return <FilterGroupBox key={item.key} filterGroup={item} />;
              })}
            </div>

            <div className={styles.mainCol}>
              <ProductsSection
                isValidCategory={isValidCategory}
                category={respCategory as CategoryItem}
              />
            </div>
          </div>
        </div>
      </main>

      <button className={styles.openMenuBtn}>
        <IconMenuHambuger />
      </button>

      <button className={styles.openCateBtn}>
        <span className={styles.openCateBtnIcon}>
          <IconLinesArrowDown />
        </span>
        <span className={styles.openCateBtnLabel}>Categories</span>
      </button>

      <DepartmentsModal
        isOpen={isOpenDeparmentsModal}
        setIsOpen={setIsOpenDeparmentsModal}
      />
    </>
  );
};

CategoryPage.Layout = MainLayout;

export default CategoryPage;
