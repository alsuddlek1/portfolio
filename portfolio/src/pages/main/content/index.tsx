import useDeviceSize from '../../../hooks/useDeviceSize';
import {
  StyledContent,
  StyledContentBox,
  StyledContentContainer,
  StyledContentBoldText,
  StyledText,
  StyledMobileContent,
  StyledMobileContentBox,
  StyledMobileContentContainer,
} from './Content.styled';

const Content = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  return (
    <>
      {isDesktop && (
        <StyledContent>
          <StyledContentBox>
            <StyledContentBoldText id="title">
              🎓 Education
            </StyledContentBoldText>

            <StyledContentContainer id="education">
              <StyledContentBoldText>
                23.01 <br />
                &nbsp;&nbsp;&nbsp;- 23.12
              </StyledContentBoldText>
              <StyledText id="content">삼성 청년 SW 아카데미 9기</StyledText>
              <StyledContentBoldText>
                21.03 <br />
                &nbsp;&nbsp;&nbsp;- 23.02
              </StyledContentBoldText>
              <StyledText id="content">창원대학교 수학과</StyledText>
              <StyledContentBoldText>
                19.03
                <br />
                &nbsp;&nbsp;&nbsp;- 21.02
              </StyledContentBoldText>
              <StyledText id="content">대구대학교 수학과/통계학과</StyledText>
            </StyledContentContainer>
          </StyledContentBox>

          <StyledContentBox>
            <StyledContentBoldText id="title">
              👩‍💻 Experience
            </StyledContentBoldText>
            <StyledContentContainer id="experience">
              <StyledContentBoldText>2022</StyledContentBoldText>
              <StyledText id="content">수학과 4학년 대표</StyledText>

              <StyledContentBoldText>2020</StyledContentBoldText>
              <StyledText id="content">초록우산 members 3기</StyledText>

              <StyledContentBoldText>2020</StyledContentBoldText>
              <StyledText id="content">수리빅데이터학부 2학년 대표</StyledText>

              <StyledContentBoldText>2019</StyledContentBoldText>
              <StyledText id="content">수리빅데이터학부 1학년 대표</StyledText>
            </StyledContentContainer>
          </StyledContentBox>

          <StyledContentBox>
            <StyledContentBoldText id="title">🏆 Award</StyledContentBoldText>
            <StyledContentContainer id="award">
              <StyledContentBoldText>2023.12</StyledContentBoldText>
              <StyledText id="content">
                삼성전자 | 자율 PJT 우수상(1등)
              </StyledText>
            </StyledContentContainer>
          </StyledContentBox>

          <StyledContentBox>
            <StyledContentBoldText id="title">
              📃 Certificate
            </StyledContentBoldText>
            <StyledContentContainer id="certificate">
              <StyledContentBoldText>2024.03</StyledContentBoldText>
              <StyledText id="content">SQLD</StyledText>
              <StyledContentBoldText>2022.12</StyledContentBoldText>
              <StyledText id="content">컴퓨터활용능력(2급)</StyledText>
            </StyledContentContainer>
          </StyledContentBox>
        </StyledContent>
      )}
      {isMobile && (
        <StyledMobileContentBox>
          <StyledMobileContent>
            <StyledContentBox>
              <StyledContentBoldText id="mobiletitle">
                🎓 Education
              </StyledContentBoldText>

              <StyledMobileContentContainer id="education">
                <StyledContentBoldText id="mobile">
                  23.01 <br />
                  &nbsp;&nbsp;&nbsp;- 23.12
                </StyledContentBoldText>
                <StyledText id="mobilecontent">
                  삼성 청년 SW 아카데미 9기
                </StyledText>
                <StyledContentBoldText id="mobile">
                  21.03 <br />
                  &nbsp;&nbsp;&nbsp;- 23.02
                </StyledContentBoldText>
                <StyledText id="mobilecontent">창원대학교 수학과</StyledText>
                <StyledContentBoldText id="mobile">
                  19.03
                  <br />
                  &nbsp;&nbsp;&nbsp;- 21.02
                </StyledContentBoldText>
                <StyledText id="mobilecontent">
                  대구대학교 수학과/통계학과
                </StyledText>
              </StyledMobileContentContainer>
            </StyledContentBox>

            <StyledContentBox>
              <StyledContentBoldText id="mobiletitle">
                👩‍💻 Experience
              </StyledContentBoldText>
              <StyledMobileContentContainer id="experience">
                <StyledContentBoldText id="mobile">2022</StyledContentBoldText>
                <StyledText id="mobilecontent">수학과 4학년 대표</StyledText>

                <StyledContentBoldText id="mobile">2020</StyledContentBoldText>
                <StyledText id="mobilecontent">초록우산 members 3기</StyledText>

                <StyledContentBoldText id="mobile">2020</StyledContentBoldText>
                <StyledText id="mobilecontent">
                  수리빅데이터학부 2학년 대표
                </StyledText>

                <StyledContentBoldText id="mobile">2019</StyledContentBoldText>
                <StyledText id="mobilecontent">
                  수리빅데이터학부 1학년 대표
                </StyledText>
              </StyledMobileContentContainer>
            </StyledContentBox>

            <StyledContentBox>
              <StyledContentBoldText id="mobiletitle">
                🏆 Award
              </StyledContentBoldText>
              <StyledMobileContentContainer id="award">
                <StyledContentBoldText id="mobile">
                  2023.12
                </StyledContentBoldText>
                <StyledText id="mobilecontent">
                  삼성전자 | 자율 PJT 우수상(1등)
                </StyledText>
              </StyledMobileContentContainer>
            </StyledContentBox>

            <StyledContentBox>
              <StyledContentBoldText id="mobiletitle">
                📃 Certificate
              </StyledContentBoldText>
              <StyledMobileContentContainer id="certificate">
                <StyledContentBoldText id="mobile">
                  2024.03
                </StyledContentBoldText>
                <StyledText id="mobilecontent">SQLD</StyledText>
                <StyledContentBoldText id="mobile">
                  2022.12
                </StyledContentBoldText>
                <StyledText id="mobilecontent">컴퓨터활용능력(2급)</StyledText>
              </StyledMobileContentContainer>
            </StyledContentBox>
          </StyledMobileContent>
        </StyledMobileContentBox>
      )}
    </>
  );
};

export default Content;
