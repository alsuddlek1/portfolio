import useDeviceSize from '../../../hooks/useDeviceSize';
import { StyledHello, StyledMobileHello } from './Hello.styled';

const Hello = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  return (
    <>
      {isDesktop && (
        <StyledHello>
          <p>안녕하세요,</p>
          <p>프론트엔드 개발자 손민영입니다 :)</p>
        </StyledHello>
      )}
      {isMobile && (
        <StyledMobileHello>
          <p>안녕하세요,</p>
          <p>프론트엔드 개발자 손민영입니다 :)</p>
        </StyledMobileHello>
      )}
    </>
  );
};

export default Hello;
