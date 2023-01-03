import IconArrowRight from '@/components/icons/IconArrowRight';
import { useState } from 'react';
import { CategoryItemLv2Props } from './types';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import IconArrowDown from '@/components/icons/IconArrowDown';

const LIMIT_CATE_SHOW = 4;

const CategoryItemLv2 = (props: CategoryItemLv2Props) => {
  const { category } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowLimited, setIsShowLimited] = useState(
    category.childrens.length > LIMIT_CATE_SHOW,
  );

  return (
    <div
      className={clsx(styles.categoryBox, {
        [styles.isExpanded]: isExpanded,
      })}
    >
      <div className={styles.boxHead} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.boxHeadIconField}>
          <IconArrowRight />
        </div>

        <div className={styles.boxHeadRightCol}>
          <div className={styles.boxTitle}>{category.category_name}</div>
        </div>
      </div>

      <div className={styles.boxBody}>
        {category.childrens.map((cateItem, idx) => {
          if (isShowLimited && idx >= LIMIT_CATE_SHOW) {
            return null;
          }

          return (
            <Link
              className={styles.cateItem}
              key={cateItem.id}
              href={`/cat/${cateItem.category_slug}-${cateItem.id}`}
            >
              {cateItem.category_name}
            </Link>
          );
        })}

        {category.childrens.length > LIMIT_CATE_SHOW && (
          <button
            className={clsx(styles.showMoreBtn, {
              [styles.isShowLess]: !isShowLimited,
            })}
            onClick={() => setIsShowLimited(!isShowLimited)}
          >
            <span className={styles.showMoreBtnLabel}>
              {isShowLimited ? <>Show more</> : <>Show less</>}
            </span>
            <span className={styles.showMoreBtnIcon}>
              <IconArrowDown />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryItemLv2;
