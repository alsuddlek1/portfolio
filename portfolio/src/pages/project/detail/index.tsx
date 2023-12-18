import { ProjectData } from '../../../data/project';
import {
  StyledDetail,
  StyledDetailBoldText,
  StyledDetailCategoryGrid,
  StyledDetailImg,
  StyledDetailLayout,
  StyledDetailText,
  StyledDetailWindow,
} from './Detail.styled';

const Detail = (props: any) => {
  const title = props.title;
  const date = props.date;
  const skills = props.skills;
  const position = props.position;
  const content = props.content;
  const imgsrc = props.imgsrc;

  console.log(ProjectData[0]);
  return (
    <StyledDetail onClick={props.closeModal}>
      <StyledDetailWindow onClick={(e: any) => e.stopPropagation()}>
        <StyledDetailLayout>
          <StyledDetailImg
            src={process.env.PUBLIC_URL + '/icon/birthday.png'}
            alt="projectlogo"
          />
          <br />
          <br />
          <StyledDetailBoldText id="titlie">{title}</StyledDetailBoldText>
          <StyledDetailCategoryGrid>
            <StyledDetailText id="category">기간</StyledDetailText>
            <StyledDetailText id="content">{date}</StyledDetailText>
            <StyledDetailText id="category">프로젝트 개요</StyledDetailText>
            <StyledDetailText id="content">{content}</StyledDetailText>
            <StyledDetailText id="category">기술스택</StyledDetailText>
            <StyledDetailText id="content">{skills}</StyledDetailText>
            <StyledDetailText id="category">담당역할</StyledDetailText>
            <StyledDetailText id="content">{position}</StyledDetailText>
          </StyledDetailCategoryGrid>
          <StyledDetailImg
            src={process.env.PUBLIC_URL + '/project' + imgsrc}
            alt="propjectMain"
          />
        </StyledDetailLayout>
      </StyledDetailWindow>
    </StyledDetail>
  );
};

export default Detail;
