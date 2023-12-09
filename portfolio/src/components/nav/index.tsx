import { useNavigate } from 'react-router-dom';
import {
  StyledNav,
  StyledNavButton,
  StyledNavButtonContainer,
  StyledNavContainer,
  StyledNavName,
} from './Nav.styeld';

const Nav = () => {
  const navigate = useNavigate();

  const goProject = () => {
    navigate('/portfolio/project');
  };
  const goMain = () => {
    navigate('/portfolio');
  };
  return (
    <StyledNav>
      <StyledNavContainer>
        <StyledNavName>Min-Young</StyledNavName>

        <StyledNavButtonContainer>
          <StyledNavButton onClick={goMain}>{'<Minyoung />'}</StyledNavButton>
          <StyledNavButton onClick={goProject}>{'<Project />'}</StyledNavButton>
        </StyledNavButtonContainer>
      </StyledNavContainer>
    </StyledNav>
  );
};

export default Nav;
