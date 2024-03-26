import { useMediaQuery } from 'react-responsive';

export default function useDeviceSize() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return { isDesktop, isTablet, isMobile };
}
