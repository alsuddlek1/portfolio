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
  const name = props.ProjectName;
  const date = props.Date;
  const skills = props.Skills;
  const position = props.Position;
  const content = props.Content;
  const imgUrl = props.ImgSrc;
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
          <StyledDetailBoldText id="titlie">{name}</StyledDetailBoldText>
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
            src={process.env.PUBLIC_URL + '/project' + imgUrl}
            alt="propjectMain"
          />
        </StyledDetailLayout>
      </StyledDetailWindow>
    </StyledDetail>
  );
};

export default Detail;
