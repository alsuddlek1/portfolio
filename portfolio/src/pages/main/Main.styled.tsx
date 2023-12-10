import styled from 'styled-components';

const StyledMain = styled.div`
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  cursor: default;
`;

const StyledMainContainer = styled.div`
  max-width: 800px;
  height: max-content;
  /* border: 1px solid gray; */
`;

const StyledHelloContainer = styled.div`
  border: 1px solid yellow;
  margin: 10vh;
`;

export { StyledMain, StyledMainContainer, StyledHelloContainer };
