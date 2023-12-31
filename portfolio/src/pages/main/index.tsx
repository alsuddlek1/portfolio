import { StyledMain, StyledMainContainer } from './Main.styled';
import Aboutme from './aboutme';
import Content from './content';
import Hello from './hello';

const Main = () => {
  return (
    <StyledMain initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <StyledMainContainer>
        <Hello />
        <Aboutme />
        {/* <Skills /> */}
        <Content />
      </StyledMainContainer>
    </StyledMain>
  );
};

export default Main;
