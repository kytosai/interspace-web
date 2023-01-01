import { LayoutProps } from '@/types/common';

function MainLayout(props: LayoutProps) {
  const { children } = props;

  return <div>{children}</div>;
}

export default MainLayout;
