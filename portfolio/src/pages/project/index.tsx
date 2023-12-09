import {
  StyledProject,
  StyledProjectBox,
  StyledProjectContainer,
  StyledProjectTitle,
} from './Project.styled';
import Card from './card';

const Project = () => {
  return (
    <StyledProject>
      <StyledProjectContainer>
        <StyledProjectTitle>#3 프로젝트</StyledProjectTitle>
        <StyledProjectBox>
          <Card
            ProjectName="🥇 Next Level"
            Date="23.10.09 - 23.11.17(6명)"
            Skills={['react', 'typescript', 'zustand', 'styledcomponents']}
            Position={['팀장', '발표', 'FE', '기획']}
            Content="K-콘텐츠를 통한 실전 한국어 표현 체험형 플랫폼"
            ImgSrc="/nextlevel.gif"
          />
          <Card
            ProjectName="⚾ LA:ON"
            Date="23.06.26 - 23.08.18(6명)"
            Skills={['react', 'javascript', 'redux']}
            Position={['발표', 'FE', '기획']}
            Content="삼성 라이온즈 파크 방문객들을 위한 서비스"
            ImgSrc="/laon.png"
          />
          <Card
            ProjectName="🦕 와이라노사우루스"
            Date="23.08.14 - 23.10.6(6명)"
            Skills={['react', 'typescript', 'zustand', 'styledcomponents']}
            Position={['발표', 'FE', '기획']}
            Content="세계 공룡정보와 공룡엑스포 및 고성 관광정보 제공"
            ImgSrc="/whyranosaurs.gif"
          />
          <Card
            ProjectName="🎥 WWM(Weather With Movie)"
            Date="23.10.09 - 23.11.17(2명)"
            Skills={['django', 'sqlite']}
            Position={['발표', 'BE', '기획']}
            Content="날씨기반 영화 추천 웹 서비스"
            ImgSrc="/wwm.png"
          />
          <Card
            ProjectName="Min-Young"
            Date="23.10.09 - 진행중(1명)"
            Skills={['react', 'typescript', 'styledcomponents']}
            Position={['FE', '기획']}
            Content="포트폴리오 웹/모바일 프로젝트"
            ImgSrc="/nextlevel.gif"
          />
        </StyledProjectBox>
      </StyledProjectContainer>
    </StyledProject>
  );
};

export default Project;
