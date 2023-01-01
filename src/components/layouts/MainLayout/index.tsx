import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';
import { MainLayoutProps } from './types';

function MainLayout(props: MainLayoutProps) {
  const { children, stickyCategories = [] } = props;

  return (
    <>
      <HeaderDesktop stickyCategories={stickyCategories} />
      <HeaderMobile stickyCategories={stickyCategories} />
      {children}
    </>
  );
}

export default MainLayout;
