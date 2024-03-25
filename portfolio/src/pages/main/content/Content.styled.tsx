import styled, { css } from 'styled-components';

const StyledContent = styled.div`
  /* border: 1px solid blue; */
  margin: 2rem 0rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 4rem;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledMobileContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMobileContent = styled.div`
  /* border: 1px solid blue; */
  width: 270px;
  margin: 2rem 0rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem 4rem;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledContentContainer = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const text: any = {
      experience: `
        grid-template-columns: 40px 1fr;
      `,
      education: `
        grid-template-columns: 80px 1fr;
      `,
    };

    return css`
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 30px 10px;
      margin-left: 20px;
      ${text[id]}
    `;
  }}
`;

const StyledMobileContentContainer = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const text: any = {
      experience: `
        grid-template-columns: 40px 1fr;
      `,
      education: `
        grid-template-columns: 80px 1fr;
      `,
    };

    return css`
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 30px 10px;
      margin-left: 5px;
      ${text[id]}
    `;
  }}
`;

const StyledContentBox = styled.div``;

const StyledContentBoldText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const text: any = {
      title: `
        font-size : 20px;
        margin-bottom : 20px;
      `,
      mobiletitle: `
        font-size : 16px;
        margin-bottom : 18px;
      `,
      mobile: `
        font-size : 14px;
        // margin-bottom : 14px;
      `,
    };

    return css`
      font-size: 16px;
      font-family: ${(props) => props.theme.fonts.semiboldfont};
      display: flex;
      align-items: center;
      ${text[id]}
    `;
  }}
`;

const StyledText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const text: any = {
      date: `
      font-size: 17px;
      `,
      content: `
      font-size:16px;
      `,
      mobilecontent: `
      font-size:14px;
      `,
    };

    return css`
      font-size: 16px;
      display: flex;
      align-items: center;
      ${text[id]}
    `;
  }}
`;

export {
  StyledContent,
  StyledContentContainer,
  StyledText,
  StyledContentBoldText,
  StyledContentBox,
  StyledMobileContent,
  StyledMobileContentBox,
  StyledMobileContentContainer,
};
