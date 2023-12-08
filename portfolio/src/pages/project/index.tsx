import {
  StyledProject,
  StyledProjectCard,
  StyledProjectCardContainer,
  StyledProjectCardText,
  StyledProjectContainer,
  StyledProjectCardImg,
  StyledProjectTitle,
} from './Project.styled';

const Project = () => {
  return (
    <StyledProject>
      <StyledProjectContainer>
        <StyledProjectTitle>{'<Projects />'}</StyledProjectTitle>
        <StyledProjectCardContainer>
          <StyledProjectCard>
            <StyledProjectCardImg>여기 이미지</StyledProjectCardImg>
            <StyledProjectCardText id="title">
              프로젝트이름
            </StyledProjectCardText>
            <StyledProjectCardText id="date">진행날짜</StyledProjectCardText>
          </StyledProjectCard>
        </StyledProjectCardContainer>
      </StyledProjectContainer>
    </StyledProject>
  );
};

export default Project;
