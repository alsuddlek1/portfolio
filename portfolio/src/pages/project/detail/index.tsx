import { useEffect } from 'react';
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
  const id = props.id - 1;
  const data = ProjectData[id];

  return (
    <StyledDetail onClick={props.closeModal}>
      <StyledDetailWindow onClick={(e: any) => e.stopPropagation()}>
        <StyledDetailLayout>
          {/* <StyledDetailImg
            src={process.env.PUBLIC_URL + '/icon/birthday.png'}
            alt="projectlogo"
          /> */}
          <StyledDetailBoldText>
            {data.contents?.ttitleIcon}
          </StyledDetailBoldText>
          <br />
          <StyledDetailBoldText id="titlie">{data.title}</StyledDetailBoldText>
          <StyledDetailCategoryGrid>
            <StyledDetailText id="category">기간</StyledDetailText>
            <StyledDetailText id="content">
              {data.contents?.date}
            </StyledDetailText>
            <StyledDetailText id="category">인원</StyledDetailText>
            <StyledDetailText id="content">
              {data.contents?.member}
            </StyledDetailText>
            <StyledDetailText id="category">프로젝트 개요</StyledDetailText>
            <StyledDetailText id="content">{data.content}</StyledDetailText>
            <StyledDetailText id="category">기술스택</StyledDetailText>
            <StyledDetailText id="content">
              {data.contents?.skills}
            </StyledDetailText>
            <StyledDetailText id="category">담당역할</StyledDetailText>
            <StyledDetailText id="content">
              {data.contents?.position}
            </StyledDetailText>
          </StyledDetailCategoryGrid>
          <StyledDetailImg
            src={process.env.PUBLIC_URL + '/project' + data.imgsrc}
            alt="propjectMain"
          />
          <StyledDetailText id="content">
            {data.contents?.content}
          </StyledDetailText>

          <StyledDetailText id="category">팀장</StyledDetailText>
          <StyledDetailText id="content">
            {data.contents?.charge.leader}
          </StyledDetailText>
        </StyledDetailLayout>
      </StyledDetailWindow>
    </StyledDetail>
  );
};

export default Detail;
