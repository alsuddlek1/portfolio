import styled from 'styled-components';

const StyledNav = styled.div`
  /* position: fixed; */
  width: 100%;
  z-index: 100;
  background-color: white;
  border-bottom: 3px solid #b4b2b2;
`;

const StyledNavContainer = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0px 8px;
  height: 5rem;
  max-width: 1000px;
`;

const StyledNavName = styled.div`
  font-size: 28px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  display: flex;
  align-items: center;
`;

const StyledNavButtonContainer = styled.div`
  display: flex;
`;

const StyledNavButton = styled.div`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  display: flex;
  align-items: center;
  margin: 0rem 1rem;
`;

export {
  StyledNav,
  StyledNavName,
  StyledNavButton,
  StyledNavContainer,
  StyledNavButtonContainer,
};
