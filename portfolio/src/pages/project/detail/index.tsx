import { ProjectData } from '../../../data/project';
import {
  StyledDetail,
  StyledDetailBoldText,
  StyledDetailCategoryGrid,
  StyledDetailCharge,
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
          <StyledDetailCategoryGrid id="category">
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
            <a href="https://github.com/alsuddlek1/Next-Level?tab=readme-ov-file#-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98">
              협업
            </a>
          </StyledDetailText>

          <StyledDetailText id="category">FE</StyledDetailText>
          <StyledDetailCategoryGrid id="charge">
            {/* 메인화면 - 콘텐츠 */}
            <StyledDetailCharge>
              <StyledDetailImg
                src={
                  process.env.PUBLIC_URL +
                  data.contents?.charge.develper.main.contents.imgsrc
                }
                alt="charge"
              />
              <StyledDetailText id="content">
                {data.contents?.charge.develper.main.contents.text}
              </StyledDetailText>
            </StyledDetailCharge>

            {/* 메인화면 - 학습 */}
            <StyledDetailCharge>
              <StyledDetailImg
                src={
                  process.env.PUBLIC_URL +
                  data.contents?.charge.develper.main.learning.imgsrc
                }
                alt="charge"
              />
              <StyledDetailText id="content">
                {data.contents?.charge.develper.main.learning.text}
              </StyledDetailText>
            </StyledDetailCharge>

            {/* 발음평가 */}
            <StyledDetailCharge>
              <StyledDetailImg
                src={
                  process.env.PUBLIC_URL +
                  data.contents?.charge.develper.main.learning.imgsrc
                }
                alt="charge"
              />
              <StyledDetailText id="content">
                {data.contents?.charge.develper.senario.text}
              </StyledDetailText>
            </StyledDetailCharge>
          </StyledDetailCategoryGrid>

          <StyledDetailText id="content">
            {data.contents?.charge.develper.chatbot.text}
          </StyledDetailText>
          <StyledDetailText id="content">
            {data.contents?.charge.develper.languge.text}
          </StyledDetailText>
        </StyledDetailLayout>
      </StyledDetailWindow>
    </StyledDetail>
  );
};

export default Detail;
