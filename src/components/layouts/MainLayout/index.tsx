import { LayoutProps } from '@/types/common';
import HeaderMobile from './components/HeaderMobile';

function MainLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <div>
      <HeaderMobile />
      {children}
    </div>
  );
}

export default MainLayout;
