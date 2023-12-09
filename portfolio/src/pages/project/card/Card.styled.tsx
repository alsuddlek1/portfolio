import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 10px;
`;

const StyledCardImg = styled.img.attrs<any>(() => ({}))`
  ${(props) => {
    const alt = props.alt;
    const name: any = {
      main: `
      width: 300px;
      `,
      icon: `
      width:20px;
      height:20px;
      margin:0px 3px;
      `,
    };

    return css`
      margin: 5px 0px;
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
        `,
    };

    return css`
      font-family: ${(props) => props.theme.fonts.semiboldfont};
      margin: 5px 0px;
      ${name[id]}
    `;
  }}
`;

const StyledCardText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      date: `
        color : gray
        `,
    };

    return css`
      font-family: ${(props) => props.theme.fonts.regularlfont};
      margin: 5px 0px;
      ${name[id]}
    `;
  }}
`;

const StyledCardRow = styled.div`
  display: flex;
`;

export {
  StyledCard,
  StyledCardImg,
  StyledCardBoldText,
  StyledCardText,
  StyledCardRow,
};
