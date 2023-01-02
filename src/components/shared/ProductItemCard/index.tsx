import React from 'react';
import { ProductItemCardProps } from './types';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { APP_CONFIG } from '@/configs';

const ProductItemCard = (props: ProductItemCardProps) => {
  const { productItem } = props;
  const productUrl = `/prd/${productItem.product_slug}`;

  return (
    <Link className={styles.productItemCard} href={productUrl}>
      <div className={styles.productImgField}>
        <div className={styles.productImgFieldInner}>
          <Image
            className={styles.productImg}
            src={productItem.product_image}
            alt={productItem.product_name}
            width={320}
            height={320}
            quality={100}
            placeholder="blur"
            blurDataURL={APP_CONFIG.BLUR_IMAGE_BASE64}
            loading="lazy"
          />
        </div>
      </div>
      <h3 className={styles.productName}>{productItem.product_name}</h3>
      <div className={styles.productPrice}>${productItem.product_price}</div>
      <div className={styles.productDesc}>
        <div className={styles.productDescInner}>{productItem.product_descriptions}</div>
      </div>
    </Link>
  );
};

export default ProductItemCard;
