import styled from 'styled-components';

const StyledNav = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: 0rem 3rem;
  border-bottom: 3px solid #b4b2b2;
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

export { StyledNav, StyledNavName, StyledNavButton, StyledNavButtonContainer };
