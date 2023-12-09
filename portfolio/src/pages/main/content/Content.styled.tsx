import styled, { css } from 'styled-components';

const StyledContent = styled.div`
  /* border: 1px solid blue; */
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StyledContentContainer = styled.div`
  /* border: 1px solid red; */
  height: 10rem;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px;
  margin-left: 20px;
`;

const StyledContentBox = styled.div`
  /* border: 1px solid green; */
  /* height: 10rem; */
`;

const StyledContentBoldText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const text: any = {
      title: `
        font-size : 20px;
        margin-bottom : 20px;
      `,
    };

    return css`
      font-size: 16px;
      font-family: ${(props) => props.theme.fonts.semiboldfont};
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
    };

    return css`
      font-size: 16px;
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
};
