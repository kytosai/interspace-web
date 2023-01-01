import { useMediaQuery } from '@react-hookz/web';

/*
  Check breakpoint in `_var.scss` file
  It doesn't work in SSR mode
*/
export const useBreakpoint = () => {
  const isBreakpointMdUp = useMediaQuery('only screen and (min-width : 768px)');
  const isBreakpointLgUp = useMediaQuery('only screen and (min-width : 1024px)');
  const isBreakpointXlUp = useMediaQuery('only screen and (min-width : 1280px)');
  const isBreakpoint2XlUp = useMediaQuery('only screen and (min-width : 1536px)');

  return {
    isBreakpointMdUp,
    isBreakpointLgUp,
    isBreakpointXlUp,
    isBreakpoint2XlUp,
  };
};
