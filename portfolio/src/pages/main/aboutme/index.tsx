import {
  StyledAboutAtag,
  StyledAboutContents,
  StyledAboutRowDiv,
  StyledAboutText,
  StyledAboutme,
  StyledProfileImg,
} from './Aboutme.styled';

const Aboutme = () => {
  return (
    <StyledAboutme>
      <StyledProfileImg
        src={process.env.PUBLIC_URL + '/profile.png'}
        alt="profile"
      />
      <StyledAboutContents>
        <StyledAboutText id="title">About Me</StyledAboutText>
        <br />
        <StyledAboutRowDiv>
          <StyledProfileImg
            src={process.env.PUBLIC_URL + '/icon/profile.png'}
            alt="icon"
          />
          <StyledAboutText>손민영</StyledAboutText>
        </StyledAboutRowDiv>
        <StyledAboutRowDiv>
          <StyledProfileImg
            src={process.env.PUBLIC_URL + '/icon/birthday.png'}
            alt="icon"
          />
          <StyledAboutText>1999.03.11</StyledAboutText>
        </StyledAboutRowDiv>
        <StyledAboutRowDiv>
          <StyledProfileImg
            src={process.env.PUBLIC_URL + '/icon/mail.png'}
            alt="icon"
          />
          <StyledAboutText>minyoung99311@gmail.com</StyledAboutText>
        </StyledAboutRowDiv>
        <StyledAboutRowDiv>
          <StyledProfileImg
            src={process.env.PUBLIC_URL + '/icon/school.png'}
            alt="icon"
          />
          <StyledAboutText>창원대학교 수학과 졸업</StyledAboutText>
        </StyledAboutRowDiv>
        <StyledAboutRowDiv>
          <StyledProfileImg
            src={process.env.PUBLIC_URL + '/icon/ssafy.png'}
            alt="icon"
          />
          <StyledAboutText>삼성 청년 SW 아카데미 9기</StyledAboutText>
        </StyledAboutRowDiv>

        <br />
        <StyledAboutRowDiv>
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
        <StyledAboutRowDiv>
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
  );
};

export default Aboutme;
