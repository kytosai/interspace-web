import IconArrowDown from '@/components/icons/IconArrowDown';
import { FilterGroupBoxProps } from './types';
import styles from './styles.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

const FilterGroupBox = (props: FilterGroupBoxProps) => {
  const { filterGroup } = props;
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={clsx(styles.filterGroupBox, {
        [styles.filterGroupBoxExpanded]: isExpanded,
      })}
    >
      <div className={styles.boxHead} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.boxTitle}>{filterGroup.name}</div>
        <div className={styles.boxHeadIcon}>
          <IconArrowDown />
        </div>
      </div>

      <div className={styles.boxBody}>
        {filterGroup.list.map((filterItem) => {
          return (
            <div key={filterItem.key} className={styles.filterItem}>
              <div className={styles.filterItemIconCol}>
                <div className={styles.filterItemIcon}></div>
              </div>
              <div className={styles.filterItemName}>{filterItem.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroupBox;
