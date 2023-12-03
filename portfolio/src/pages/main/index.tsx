import {
  StyledHelloContainer,
  StyledMain,
  StyledMainContainer,
} from './Main.styled';
import Abountme from './aboutme';
import Hello from './hello';
import Skills from './skills';

const Main = () => {
  return (
    <StyledMain>
      <StyledMainContainer>
        <StyledHelloContainer>
          <Hello />
        </StyledHelloContainer>
        <Abountme />
        <Skills />
      </StyledMainContainer>
    </StyledMain>
  );
};

export default Main;
