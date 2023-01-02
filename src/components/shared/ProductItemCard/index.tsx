import React from 'react';
import { ProductItemCardProps } from './types';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { APP_CONFIG } from '@/configs';
import RatingStarBar from '../RatingStarBar';
import IconHeart from '@/components/icons/IconHeart';
import { useAppDispatch } from '@/store';
import { cartActions } from '@/store/cartSlice';

const ProductItemCard = (props: ProductItemCardProps) => {
  const { productItem } = props;
  const productUrl = `/prd/${productItem.product_slug}`;
  const dispatch = useAppDispatch();

  const handleClickBuyNow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(cartActions.increaseTotalQuantity());
    alert('Added product to cart success!');
  };

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
      <div className={styles.actionBar}>
        <RatingStarBar
          classNames={styles.ratingStarBar}
          rating={productItem.product_vote}
        />
        <div className={styles.rating}>{productItem.product_vote}</div>
        <div className={styles.btnCol}>
          <button className={styles.favoriteBtn}>
            <IconHeart />
          </button>
          <button className={styles.buyNowBtn} onClick={handleClickBuyNow}>
            Buy now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItemCard;
