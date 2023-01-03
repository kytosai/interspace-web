import Skeleton from 'react-loading-skeleton';
import styles from './styles.module.scss';

const DepartmentGroupSkeleton = () => {
  return (
    <div className={styles.departmentGroupSkeleton}>
      <div className={styles.groupHead}>
        <Skeleton className={styles.title} />
      </div>

      <div className={styles.groupBody}>
        <Skeleton className={styles.item} />
        <Skeleton className={styles.item} />
        <Skeleton className={styles.item} />
        <Skeleton className={styles.item} />
        <Skeleton className={styles.item} />
      </div>
    </div>
  );
};

export default DepartmentGroupSkeleton;
