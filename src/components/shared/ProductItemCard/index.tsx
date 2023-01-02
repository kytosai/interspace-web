import React from 'react';
import { ProductItemCardProps } from './types';

const ProductItemCard = (props: ProductItemCardProps) => {
  const { productItem } = props;

  return <div>{productItem.product_name}</div>;
};

export default ProductItemCard;
