import React from 'react';
import styles from './styles.module.scss';
import LogoWhite from '@/assets/images/logo-white.svg';
import Link from 'next/link';
import Image from 'next/image';
import IconCart from '@/components/icons/IconCart';
import IconSearch from '@/components/icons/IconSearch';
import { HeaderMobileProps } from './types';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { cartSelectors } from '@/store/cartSlice';

const HeaderMobile = (props: HeaderMobileProps) => {
  const { stickyCategories } = props;
  const cartTotalQuantity = useSelector(cartSelectors.getTotalQuantity);
  const router = useRouter();

  return (
    <section className={styles.header}>
      <div className={styles.mainBar}>
        <Link className={styles.logoField} href="/">
          <Image src={LogoWhite} width={91} height={38} alt="" priority={true} />
        </Link>

        <div className={styles.rightCol}>
          <button className={styles.actionBtn}>
            <IconSearch />
          </button>

          <button className={styles.actionBtn}>
            <IconCart />

            {cartTotalQuantity > 0 && (
              <div className={styles.cartQuantityIcon}>{cartTotalQuantity}</div>
            )}
          </button>

          <button className={styles.userBtn}>
            <Image
              className={styles.userBtnImg}
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg"
              width={40}
              height={40}
              alt=""
            />
          </button>
        </div>
      </div>

      {stickyCategories.length > 0 && (
        <div className={styles.cateBar}>
          <div className={styles.cateBarInner}>
            {stickyCategories.map((cateItem) => {
              const slugUrl = `${cateItem.category_slug}-${cateItem.id}`;
              const isActive = slugUrl === router.query.slug;

              return (
                <Link
                  className={clsx({
                    [styles.cateItem]: true,
                    [styles.isActive]: isActive,
                  })}
                  key={cateItem.id}
                  href={`/cat/${slugUrl}`}
                >
                  {cateItem.category_name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeaderMobile;
