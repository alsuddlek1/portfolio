import styled from 'styled-components';

const StyledContent = styled.div`
  border: 1px solid pink;
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StyledContentContainer = styled.div`
  border: 1px solid pink;
  height: 10rem;
`;

const StyledText = styled.div`
  font-size: 16px;
`;

export { StyledContent, StyledContentContainer, StyledText };
