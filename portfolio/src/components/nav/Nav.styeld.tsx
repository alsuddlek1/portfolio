import styled from 'styled-components';

const StyledNav = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: white;
  border-bottom: 1px solid #b4b2b2;
`;

const StyledNavContainer = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0px 20px;
  height: 5rem;
  max-width: 1200px;
`;

const StyledMobileNavContainer = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0px 20px;
  height: 56px;
  max-width: 1200px;
`;

const StyledNavName = styled.div`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
`;

const StyledMobileNavName = styled.div`
  font-size: 10px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
`;

const StyledLogo = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

const StyledMobileLogo = styled.img`
  width: 15px;
  margin-right: 7px;
  cursor: pointer;
`;

const StyledNavButtonContainer = styled.div`
  display: flex;
`;

const StyledNavButton = styled.div`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  display: flex;
  align-items: center;
  margin: 0rem 1rem;
  cursor: pointer;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${(props) => props.theme.colors.main};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;

const StyledMobileNavButton = styled.div`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  display: flex;
  align-items: center;
  margin: 0rem 5px;
  cursor: pointer;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${(props) => props.theme.colors.main};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;

export {
  StyledNav,
  StyledLogo,
  StyledNavName,
  StyledNavButton,
  StyledNavContainer,
  StyledNavButtonContainer,
  StyledMobileNavContainer,
  StyledMobileNavName,
  StyledMobileLogo,
  StyledMobileNavButton,
};
