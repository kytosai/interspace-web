import { LayoutProps } from '@/types/common';

function EmptyLayout(props: LayoutProps) {
  const { children } = props;

  return <>{children}</>;
}

export default EmptyLayout;
