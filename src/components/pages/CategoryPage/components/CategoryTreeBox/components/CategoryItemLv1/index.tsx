import IconArrowRight from '@/components/icons/IconArrowRight';
import { useState } from 'react';
import { CategoryItemLv1Props } from './types';
import styles from './styles.module.scss';
import clsx from 'clsx';
import CategoryItemLv2 from '../CategoryItemLv2';

const CategoryItemLv1 = (props: CategoryItemLv1Props) => {
  const { category } = props;
  const [isExpanded, setIsExpanded] = useState(false);

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
        {category.childrens.map((cateItem) => {
          return <CategoryItemLv2 key={cateItem.id} category={cateItem} />;
        })}
      </div>
    </div>
  );
};

export default CategoryItemLv1;
