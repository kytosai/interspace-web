import HeaderMobile from './components/HeaderMobile';
import { MainLayoutProps } from './types';

function MainLayout(props: MainLayoutProps) {
  const { children, stickyCategories = [] } = props;

  return (
    <div>
      <HeaderMobile stickyCategories={stickyCategories} />
      {children}
    </div>
  );
}

export default MainLayout;
