import { useNavigate } from 'react-router-dom';
import {
  StyledLogo,
  StyledMobileLogo,
  StyledMobileNavButton,
  StyledMobileNavContainer,
  StyledMobileNavName,
  StyledNav,
  StyledNavButton,
  StyledNavButtonContainer,
  StyledNavContainer,
  StyledNavName,
} from './Nav.styeld';
import { useEffect } from 'react';
import useDeviceSize from '../../hooks/useDeviceSize';

const Nav = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  const navigate = useNavigate();

  const goProject = () => {
    navigate('/portfolio/project');
  };
  const goMain = () => {
    navigate('/portfolio');
  };

  return (
    <>
      {isDesktop && (
        <StyledNav>
          <StyledNavContainer>
            <StyledNavButtonContainer onClick={goMain}>
              <StyledLogo src={process.env.PUBLIC_URL + '/logo.svg'} />
              <StyledNavName>Minyoung's Portfolio</StyledNavName>
            </StyledNavButtonContainer>

            <StyledNavButtonContainer>
              <StyledNavButton onClick={goMain}>
                {'<Minyoung />'}
              </StyledNavButton>
              <StyledNavButton onClick={goProject}>
                {'<Project />'}
              </StyledNavButton>
            </StyledNavButtonContainer>
          </StyledNavContainer>
        </StyledNav>
      )}
      {isMobile && (
        <StyledNav>
          <StyledMobileNavContainer>
            <StyledNavButtonContainer onClick={goMain}>
              <StyledMobileLogo src={process.env.PUBLIC_URL + '/logo.svg'} />
              <StyledMobileNavName>Minyoung's Portfolio</StyledMobileNavName>
            </StyledNavButtonContainer>

            <StyledNavButtonContainer>
              <StyledMobileNavButton onClick={goMain}>
                {'<Minyoung />'}
              </StyledMobileNavButton>
              <StyledMobileNavButton onClick={goProject}>
                {'<Project />'}
              </StyledMobileNavButton>
            </StyledNavButtonContainer>
          </StyledMobileNavContainer>
        </StyledNav>
      )}
    </>
  );
};

export default Nav;
