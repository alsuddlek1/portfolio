import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 15px;
  width: 300px;
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
        `,
    };

    return css`
      font-family: ${(props) => props.theme.fonts.semiboldfont};
      margin: 10px;
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
      margin: 10px;
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
