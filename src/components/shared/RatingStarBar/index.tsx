import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { RatingStarBarProps } from './types';
import styles from './styles.module.scss';
import IconStar from '@/components/icons/IconStar';
import IconStarHalf from '@/components/icons/IconStarHalf';

const RatingStarBar = (props: RatingStarBarProps) => {
  const { classNames, rating, maxRating = 5 } = props;
  const finalRating = rating > maxRating ? maxRating : rating;

  if (finalRating <= 0.2) {
    const fakeArray = new Array(maxRating).fill(null);

    return (
      <div className={clsx(classNames, styles.ratingStarBar)}>
        {fakeArray.map((_, idx) => {
          return (
            <span key={idx} className={clsx(styles.starInactive, styles.starIcon)}>
              <IconStar />
            </span>
          );
        })}
      </div>
    );
  }

  const fullStarScore = Math.floor(finalRating); // thực tế sẽ không bao giờ có sản phẩm nào đạt được maxRatingStar (5) full star
  const halfStarScore = finalRating - fullStarScore;

  const numFullStarIcon: number[] = [];
  if (fullStarScore > 0) {
    for (let i = 1; i <= fullStarScore; ++i) {
      numFullStarIcon.push(i);
    }
  }

  let halfStarIcon: ReactNode = null;
  switch (halfStarScore > 0) {
    case halfStarScore <= 0.2:
      halfStarIcon = (
        <span className={clsx(styles.starInactive, styles.starIcon)}>
          <IconStar />
        </span>
      );
      break;
    case halfStarScore > 0.2 && halfStarScore < 0.8:
      halfStarIcon = (
        <span className={clsx(styles.starActive, styles.starIcon)}>
          <IconStarHalf />
        </span>
      );
      break;
    case halfStarScore > 0.8:
      halfStarIcon = (
        <span className={clsx(styles.starActive, styles.starIcon)}>
          <IconStar />
        </span>
      );
      break;
  }

  // fake mảng empty star đẻ hỗ trợ for trong jsx
  const totalStar = halfStarScore > 0 ? fullStarScore + 1 : fullStarScore;
  const numRemainEmptyStarIcon: number[] = [];
  if (totalStar < maxRating) {
    for (let i = totalStar; i < maxRating; ++i) {
      numRemainEmptyStarIcon.push(i);
    }
  }

  return (
    <div className={clsx(classNames, styles.ratingStarBar)}>
      {numFullStarIcon.map((_, idx) => {
        return (
          <span key={idx} className={clsx(styles.starActive, styles.starIcon)}>
            <IconStar />
          </span>
        );
      })}

      {halfStarScore > 0 ? halfStarIcon : null}

      {numRemainEmptyStarIcon.map((_, idx) => {
        return (
          <span key={idx} className={clsx(styles.starInactive, styles.starIcon)}>
            <IconStar />
          </span>
        );
      })}
    </div>
  );
};

export default RatingStarBar;
