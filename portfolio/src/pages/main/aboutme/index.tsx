import {
  StyledAboutAtag,
  StyledAboutContents,
  StyledAboutText,
  StyledAboutme,
  StyledProfileImg,
} from './Aboutme.styled';

const Aboutme = () => {
  return (
    <StyledAboutme>
      <StyledProfileImg src="./logo192.png" alt="profile" />
      <StyledAboutContents>
        <StyledAboutText id="title">About Me</StyledAboutText>
        <StyledAboutText>손민영</StyledAboutText>
        <StyledAboutText>🎂 1999.03.11</StyledAboutText>
        <StyledAboutText>📞 010-3895-9445</StyledAboutText>
        <StyledAboutText>📧 minyoung99311@gmail.com</StyledAboutText>
        <StyledAboutText>
          🎓 창원대학교 수학과 졸업 (2021.03-2023.02)
        </StyledAboutText>
        <StyledAboutText>
          💻 삼성 청년 SW 아카데미 9기 (2023.01 - 2023.12)
        </StyledAboutText>
        <br />
        <StyledAboutText>
          <StyledAboutAtag href="https://github.com/alsuddlek1">
            Git | GitHub
          </StyledAboutAtag>
        </StyledAboutText>
        <StyledAboutText>
          <StyledAboutAtag href="https://alsuddlek.tistory.com/">
            BLOG | Tistory
          </StyledAboutAtag>
        </StyledAboutText>
      </StyledAboutContents>
    </StyledAboutme>
  );
};

export default Aboutme;
