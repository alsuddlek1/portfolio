import styled, { css } from 'styled-components';

const StyledCard = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      box: `
      padding : 10px;
      `,
      card: `
      border: 1px solid gray;
      border-radius: 10px;
      overflow: hidden;
      width: 300px;
      `,
    };

    return css`
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      cursor: default;
      ${name[id]}
    `;
  }}
`;

const StyledCardImg = styled.img.attrs<any>(() => ({}))`
  ${(props) => {
    const alt = props.alt;
    const name: any = {
      main: `
      width: 300px;
      height : 140px;
      `,
      icon: `
      width:20px;
      height:20px;
      margin: 0px 0px 0px 10px;
      `,
    };

    return css`
      ${name[alt]}
    `;
  }}
`;

const StyledCardBoldText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      title: `
        font-size : 18px;
        margin-bottom : 5px;
        `,
    };

    return css`
      font-family: ${(props) => props.theme.fonts.semiboldfont};
      ${name[id]}
    `;
  }}
`;

const StyledCardText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      date: `
        color : gray;
        font-size : 14px;
        `,
      content: `
        color : gray;
        font-size : 14px;
        margin-bottom : 5px;
      `,
    };

    return css`
      font-family: ${(props) => props.theme.fonts.regularlfont};
      ${name[id]}
    `;
  }}
`;

const StyledCardRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export {
  StyledCard,
  StyledCardImg,
  StyledCardBoldText,
  StyledCardText,
  StyledCardRow,
};
