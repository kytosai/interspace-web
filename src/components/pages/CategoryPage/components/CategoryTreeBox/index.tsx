import IconArrowRight from '@/components/icons/IconArrowRight';
import { useState } from 'react';
import { CategoryTreeBoxProps } from './types';
import styles from './styles.module.scss';
import clsx from 'clsx';
import CategoryItemLv1 from './components/CategoryItemLv1';

const CategoryTreeBox = (props: CategoryTreeBoxProps) => {
  const { categoryList } = props;
  const [isExpanded, setIsExpanded] = useState(true);

  if (categoryList.length <= 0) return null;

  return (
    <div
      className={clsx(styles.categoryTreeBox, {
        [styles.isExpanded]: isExpanded,
      })}
    >
      <div className={styles.boxHead} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.boxHeadIconField}>
          <IconArrowRight />
        </div>

        <div className={styles.boxHeadRightCol}>
          <div className={styles.boxTitle}>All Categories</div>
          <div className={styles.boxSubTitle}>Ecommerce patterns</div>
        </div>
      </div>

      <div className={styles.boxBody}>
        {categoryList.map((cateItem) => {
          return <CategoryItemLv1 key={cateItem.id} category={cateItem} />;
        })}
      </div>
    </div>
  );
};

export default CategoryTreeBox;
