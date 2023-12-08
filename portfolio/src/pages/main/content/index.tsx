import {
  StyledContent,
  StyledContentContainer,
  StyledText,
} from './Content.styled';

const Content = () => {
  return (
    <StyledContent>
      <StyledContentContainer>
        🎓 Education
        <StyledText>19.03 - 21.02 대구대학교 수학과/통계학과</StyledText>
        <StyledText>21.03 - 23.02 창원대학교 수학과</StyledText>
        <StyledText>23.01 - 23.12 삼성 청년 SW 아카데미 9기</StyledText>
      </StyledContentContainer>
      <StyledContentContainer>
        👩‍💻 Experience
        <StyledText>2020 4학년 과대표</StyledText>
        <StyledText>2020 초록우산 members 3기</StyledText>
        <StyledText>2020 2학년 과대표</StyledText>
        <StyledText>2019 1학년 과대표</StyledText>
      </StyledContentContainer>
      <StyledContentContainer>
        🏆 Award
        <StyledText>
          2023 삼성전자 | 삼성 청년 SW 아카데미 자율 프로젝트 우수상(1등)
        </StyledText>
      </StyledContentContainer>
      <StyledContentContainer>
        📃 Certificate
        <StyledText>2023 Toeic Speacking IM</StyledText>
        <StyledText>2022 컴퓨터활용능력(2급)</StyledText>
      </StyledContentContainer>
    </StyledContent>
  );
};

export default Content;
