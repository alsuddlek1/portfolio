import { useNavigate } from 'react-router-dom';
import {
  StyledLogo,
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
        <StyledNavButtonContainer onClick={goMain}>
          <StyledLogo src={process.env.PUBLIC_URL + '/logo.svg'} />
          <StyledNavName>
            FrontEnd-Developer Min-young's Portfolio
          </StyledNavName>
        </StyledNavButtonContainer>

        <StyledNavButtonContainer>
          <StyledNavButton onClick={goMain}>{'<Minyoung />'}</StyledNavButton>
          <StyledNavButton onClick={goProject}>{'<Project />'}</StyledNavButton>
        </StyledNavButtonContainer>
      </StyledNavContainer>
    </StyledNav>
  );
};

export default Nav;
