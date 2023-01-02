import Skeleton from 'react-loading-skeleton';
import styles from './styles.module.scss';

const ProductItemCardSkeletonHorizontal = () => {
  return (
    <div className={styles.productItemCardSekeleton}>
      <div className={styles.imageField}>
        <div className={styles.imageFieldInner}>
          <Skeleton className={styles.productImage} />
        </div>
      </div>

      <div className={styles.infoCol}>
        <div className={styles.titleField}>
          <Skeleton count={1} />
          <Skeleton count={1} />
          <Skeleton count={1} width="80%" />
        </div>

        <div className={styles.priceField}>
          <Skeleton count={1} width={80} />
        </div>
      </div>
    </div>
  );
};

export default ProductItemCardSkeletonHorizontal;
