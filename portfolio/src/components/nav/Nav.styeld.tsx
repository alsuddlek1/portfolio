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
  padding: 0px 8px;
  height: 5rem;
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

const StyledLogo = styled.img`
  width: 25px;
  margin-right: 10px;
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
`;

export {
  StyledNav,
  StyledLogo,
  StyledNavName,
  StyledNavButton,
  StyledNavContainer,
  StyledNavButtonContainer,
};
