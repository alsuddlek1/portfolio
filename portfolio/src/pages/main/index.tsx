import {
  StyledHelloContainer,
  StyledMain,
  StyledMainContainer,
} from './Main.styled';
import Aboutme from './aboutme';
import Hello from './hello';
import Skills from './skills';

const Main = () => {
  return (
    <StyledMain>
      <StyledMainContainer>
        <StyledHelloContainer>
          <Hello />
        </StyledHelloContainer>
        <Aboutme />
        <Skills />
      </StyledMainContainer>
    </StyledMain>
  );
};

export default Main;
