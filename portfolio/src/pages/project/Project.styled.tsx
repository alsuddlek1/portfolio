import styled from 'styled-components';

const StyledProject = styled.div`
  border: 1px solid red;
  height: 92vh;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

const StyledProjectContainer = styled.div`
  max-width: 55vw;
  width: 55vw;
  height: max-content;
  border: 1px solid gray;
`;

const StyledProjectTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 28px;
  text-align: center;
  margin-top: 2rem;
`;

const StyledProjectCardContainer = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 3rem;
`;

const StyledProjectCard = styled.div`
  border: 1px solid pink;
`;

const StyledProjectCardImg = styled.div`
  background-color: aliceblue;
  height: 100px;
`;

const StyledProjectCardText = styled.div`
  border: 1px solid black;
`;

export {
  StyledProject,
  StyledProjectContainer,
  StyledProjectCardContainer,
  StyledProjectTitle,
  StyledProjectCard,
  StyledProjectCardImg,
  StyledProjectCardText,
};
