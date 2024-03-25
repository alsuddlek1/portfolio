import useDeviceSize from '../../../hooks/useDeviceSize';
import {
  StyledAboutAtag,
  StyledAboutBoldText,
  StyledAboutContents,
  StyledAboutRowDiv,
  StyledAboutText,
  StyledAboutme,
  StyledMobileAboutContents,
  StyledMobileAboutme,
  StyledProfileImg,
} from './Aboutme.styled';

const Aboutme = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  return (
    <>
      {isDesktop && (
        <StyledAboutme>
          <StyledProfileImg
            src={process.env.PUBLIC_URL + '/profile.png'}
            alt="profile"
          />
          <StyledAboutContents>
            <StyledAboutBoldText id="title">About Me</StyledAboutBoldText>
            <StyledAboutText id="aboutme">
              커피와 노트북만 있다면, 언제 어디서나 즐겁게 일하는 개발자
              손민영입니다 🤩
            </StyledAboutText>
            <StyledAboutRowDiv id="desktop">
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/profile.png'}
                alt="icon"
              />
              <StyledAboutText>손민영</StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv id="desktop">
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/birthday.png'}
                alt="icon"
              />
              <StyledAboutText>1999.03.11</StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv id="desktop">
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/mail.png'}
                alt="icon"
              />
              <StyledAboutText>minyoung99311@gmail.com</StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv id="desktop">
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/school.png'}
                alt="icon"
              />
              <StyledAboutText>창원대학교 수학과 졸업</StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv id="desktop">
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/ssafy.png'}
                alt="icon"
              />
              <StyledAboutText>삼성 청년 SW 아카데미 9기</StyledAboutText>
            </StyledAboutRowDiv>

            <br />
            <StyledAboutRowDiv id="desktop">
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/github.png'}
                alt="tag"
              />
              <StyledAboutText>
                <StyledAboutAtag href="https://github.com/alsuddlek1">
                  | GitHub
                </StyledAboutAtag>
              </StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv id="desktop">
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/blog.png'}
                alt="tag"
              />
              <StyledAboutText>
                <StyledAboutAtag href="https://alsuddlek.tistory.com/">
                  | Tistory
                </StyledAboutAtag>
              </StyledAboutText>
            </StyledAboutRowDiv>
          </StyledAboutContents>
        </StyledAboutme>
      )}
      {isMobile && (
        <StyledMobileAboutme>
          <StyledProfileImg
            src={process.env.PUBLIC_URL + '/profile.png'}
            alt="mobileprofile"
          />
          <StyledMobileAboutContents>
            <StyledAboutBoldText id="mobiletitle">About Me</StyledAboutBoldText>
            <StyledAboutText id="aboutme">
              커피와 노트북만 있다면, 언제 어디서나 즐겁게 일하는 개발자
              손민영입니다 🤩
            </StyledAboutText>
            <StyledAboutRowDiv id="mobile">
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/profile.png'}
                alt="mobileicon"
              />
              <StyledAboutText>손민영</StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv>
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/birthday.png'}
                alt="mobileicon"
              />
              <StyledAboutText>1999.03.11</StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv>
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/mail.png'}
                alt="mobileicon"
              />
              <StyledAboutText>minyoung99311@gmail.com</StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv>
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/school.png'}
                alt="mobileicon"
              />
              <StyledAboutText>창원대학교 수학과 졸업</StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv>
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/ssafy.png'}
                alt="mobileicon"
              />
              <StyledAboutText>삼성 청년 SW 아카데미 9기</StyledAboutText>
            </StyledAboutRowDiv>

            <br />
            <StyledAboutRowDiv>
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/github.png'}
                alt="mobiletag"
              />
              <StyledAboutText>
                <StyledAboutAtag href="https://github.com/alsuddlek1">
                  | GitHub
                </StyledAboutAtag>
              </StyledAboutText>
            </StyledAboutRowDiv>
            <StyledAboutRowDiv>
              <StyledProfileImg
                src={process.env.PUBLIC_URL + '/icon/blog.png'}
                alt="mobiletag"
              />
              <StyledAboutText>
                <StyledAboutAtag href="https://alsuddlek.tistory.com/">
                  | Tistory
                </StyledAboutAtag>
              </StyledAboutText>
            </StyledAboutRowDiv>
          </StyledMobileAboutContents>
        </StyledMobileAboutme>
      )}
    </>
  );
};

export default Aboutme;
