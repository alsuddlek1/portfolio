import { useNavigate } from 'react-router-dom';
import {
  StyledNav,
  StyledNavButton,
  StyledNavButtonContainer,
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
      <StyledNavName>Min-Young</StyledNavName>

      <StyledNavButtonContainer>
        <StyledNavButton onClick={goMain}>{'<Minyoung />'}</StyledNavButton>
        <StyledNavButton onClick={goProject}>{'<Project />'}</StyledNavButton>
      </StyledNavButtonContainer>
    </StyledNav>
  );
};

export default Nav;
