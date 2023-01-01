import Logo from '@/assets/images/logo.svg';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchBar from '../SearchBar';
import styles from './styles.module.scss';
import { HeaderDesktopProps } from './types';

const HeaderDesktop = (props: HeaderDesktopProps) => {
  const { stickyCategories } = props;
  const router = useRouter();

  return (
    <section className={styles.header}>
      <div className={styles.mainBar}>
        <Link className={styles.logoField} href="/">
          <Image src={Logo} width={91} height={38} alt="" priority={true} />
        </Link>

        <SearchBar />

        <div className={styles.rightCol}>
          <button className={styles.signInBtn}>Sign in</button>

          <button className={styles.myCartBtn}>
            <div className={styles.myCartBtnLabel}>My cart</div>
            <div className={styles.cartQuantityIcon}>12</div>
          </button>
        </div>

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

      <div className={styles.cateBar}>
        <div className="container">
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
                  title={cateItem.category_name}
                >
                  <div className={styles.cateItemIcon}>
                    <Image
                      className={styles.cateItemIconImg}
                      src={cateItem.icon_url}
                      width={18}
                      height={18}
                      alt={cateItem.category_name}
                    />
                  </div>
                  <div className={styles.cateItemName}>{cateItem.category_name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDesktop;
