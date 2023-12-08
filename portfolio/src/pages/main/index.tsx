import { StyledMain, StyledMainContainer } from './Main.styled';
import Aboutme from './aboutme';
import Content from './content';
import Hello from './hello';
import Skills from './skills';

const Main = () => {
  return (
    <StyledMain>
      <StyledMainContainer>
        <Hello />
        <Aboutme />
        <Skills />
        <Content />
      </StyledMainContainer>
    </StyledMain>
  );
};

export default Main;
