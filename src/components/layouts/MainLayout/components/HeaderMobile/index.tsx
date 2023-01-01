import React from 'react';
import styles from './styles.module.scss';
import LogoWhite from '@/assets/images/logo-white.svg';
import Link from 'next/link';
import Image from 'next/image';
import IconCart from '@/components/icons/IconCart';
import IconSearch from '@/components/icons/IconSearch';

const HeaderMobile = () => {
  return (
    <section className={styles.header}>
      <div className={styles.mainBar}>
        <Link className={styles.logoField} href="/">
          <Image src={LogoWhite} width={91} height={38} alt="" priority />
        </Link>

        <div className={styles.rightCol}>
          <button className={styles.actionBtn}>
            <IconSearch />
          </button>

          <button className={styles.actionBtn}>
            <IconCart />
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
    </section>
  );
};

export default HeaderMobile;
