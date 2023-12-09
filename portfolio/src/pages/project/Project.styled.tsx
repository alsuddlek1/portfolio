import styled from 'styled-components';

const StyledProject = styled.div`
  /* border: 1px solid red; */
  height: 92vh;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

const StyledProjectContainer = styled.div`
  max-width: 1000px;
  height: max-content;
  /* border: 1px solid gray; */
  padding: 0rem 1rem;
`;

const StyledProjectTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 28px;
  text-align: center;
  margin-top: 2rem;
`;

const StyledProjectBox = styled.div`
  /* border: 1px solid green; */
  margin: 5rem 0rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export {
  StyledProject,
  StyledProjectContainer,
  StyledProjectTitle,
  StyledProjectBox,
};
