import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DepartmentGroupProps } from './types';
import styles from './styles.module.scss';

const DepartmentGroup = (props: DepartmentGroupProps) => {
  const { deparment } = props;
  const childrenList = deparment.childrens;

  if (childrenList.length > 5) {
    childrenList.length = 5;
  }

  return (
    <div className={styles.departmentGroup}>
      <div className={styles.groupHead}>
        <Link href="/" className={styles.groupTitle}>
          <span className={styles.groupTitleIcon}>
            <Image
              className={styles.groupTitleIconImg}
              src={deparment.icon_url}
              width={18}
              height={18}
              alt={deparment.department_name}
            />
          </span>

          <span className={styles.groupTitleText}>{deparment.department_name}</span>
        </Link>
      </div>

      {childrenList.length > 0 && (
        <div className={styles.groupBody}>
          {childrenList.map((item) => {
            return (
              <div className={styles.departmentItem} key={item.id}>
                <Link className={styles.departmentItemInner} href="/">
                  {item.department_name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DepartmentGroup;
