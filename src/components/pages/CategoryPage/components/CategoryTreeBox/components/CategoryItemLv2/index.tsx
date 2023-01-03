import IconArrowRight from '@/components/icons/IconArrowRight';
import { useState } from 'react';
import { CategoryItemLv2Props } from './types';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

const CategoryItemLv2 = (props: CategoryItemLv2Props) => {
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
      </div>
    </div>
  );
};

export default CategoryItemLv2;
