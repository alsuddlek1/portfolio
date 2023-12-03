import {
  StyledAbountContents,
  StyledAboutme,
  StyledProfileImg,
} from './Aboutme.styled';

const Abountme = () => {
  return (
    <StyledAboutme>
      <StyledProfileImg src="./logo512.png" alt="profile" />
      <StyledAbountContents>Abount Me</StyledAbountContents>
    </StyledAboutme>
  );
};

export default Abountme;
