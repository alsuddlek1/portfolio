import useDeviceSize from '../../hooks/useDeviceSize';
import {
  StyledMain,
  StyledMainContainer,
  StyledMobileMain,
} from './Main.styled';
import Aboutme from './aboutme';
import Content from './content';
import Hello from './hello';

const Main = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  return (
    <>
      {isDesktop && (
        <StyledMain initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <StyledMainContainer>
            <Hello />
            <Aboutme />
            <Content />
          </StyledMainContainer>
        </StyledMain>
      )}
      {isTablet && (
        <StyledMain initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <StyledMainContainer>
            <Hello />
            <Aboutme />
            태블릿
            <Content />
          </StyledMainContainer>
        </StyledMain>
      )}
      {isMobile && (
        <StyledMobileMain initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <StyledMainContainer>
            {/* <Hello /> */}
            <Aboutme />
            <Content />
          </StyledMainContainer>
        </StyledMobileMain>
      )}
    </>
  );
};

export default Main;
