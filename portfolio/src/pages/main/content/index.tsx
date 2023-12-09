import {
  StyledContent,
  StyledContentBox,
  StyledContentContainer,
  StyledContentBoldText,
  StyledText,
} from './Content.styled';

const Content = () => {
  return (
    <StyledContent>
      <StyledContentBox>
        <StyledContentBoldText id="title">🎓 Education</StyledContentBoldText>

        <StyledContentContainer>
          <StyledContentBoldText>
            19.03
            <br />
            &nbsp;&nbsp;&nbsp;- 21.02
          </StyledContentBoldText>
          <StyledText id="content">대구대학교 수학과/통계학과</StyledText>

          <StyledContentBoldText>
            21.03 <br />
            &nbsp;&nbsp;&nbsp;- 23.02
          </StyledContentBoldText>
          <StyledText id="content">창원대학교 수학과</StyledText>

          <StyledContentBoldText>
            23.01 <br />
            &nbsp;&nbsp;&nbsp;- 23.12
          </StyledContentBoldText>
          <StyledText id="content">삼성 청년 SW 아카데미 9기</StyledText>
        </StyledContentContainer>
      </StyledContentBox>

      <StyledContentBox>
        <StyledContentBoldText id="title">👩‍💻 Experience</StyledContentBoldText>
        <StyledContentContainer>
          <StyledContentBoldText>2022</StyledContentBoldText>
          <StyledText id="content">수학과 4학년 대표</StyledText>

          <StyledContentBoldText>2020</StyledContentBoldText>
          <StyledText id="content">초록우산 members 3기</StyledText>

          <StyledContentBoldText>2020</StyledContentBoldText>
          <StyledText id="content">수리빅데이터학부 2학년 대표</StyledText>

          <StyledContentBoldText>2020</StyledContentBoldText>
          <StyledText id="content">수리빅데이터학부 1학년 대표</StyledText>
        </StyledContentContainer>
      </StyledContentBox>

      <StyledContentBox>
        <StyledContentBoldText id="title">🏆 Award</StyledContentBoldText>
        <StyledContentContainer>
          <StyledContentBoldText>2023</StyledContentBoldText>
          <StyledText id="content">삼성전자 | 자율 PJT 우수상(1등)</StyledText>
        </StyledContentContainer>
      </StyledContentBox>

      <StyledContentBox>
        <StyledContentBoldText id="title">📃 Certificate</StyledContentBoldText>
        <StyledContentContainer>
          <StyledContentBoldText>2022</StyledContentBoldText>
          <StyledText id="content">컴퓨터활용능력(2급)</StyledText>
        </StyledContentContainer>
      </StyledContentBox>
    </StyledContent>
  );
};

export default Content;
