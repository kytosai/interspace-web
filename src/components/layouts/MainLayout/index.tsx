import { LayoutProps } from '@/types/common';

function MainLayout(props: LayoutProps) {
  const { children } = props;

  return <>{children}</>;
}

export default MainLayout;
