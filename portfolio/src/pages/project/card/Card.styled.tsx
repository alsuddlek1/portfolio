import styled, { css } from 'styled-components';

const StyledCard = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      box: `
      padding : 15px;
      // height : 130px
      `,
      card: `
      border-radius: 5px;
      overflow: hidden;
      max-width : 400px;
      // width: 400px;
      width : 100%;
      max-height : 225px;
      height : 225px;
      border-radius: 5px;
      border: 3px solid gray;
      `,
    };

    return css`
      display: flex;
      flex-direction: column;
      cursor: default;
      position: relative;
      ${name[id]}
    `;
  }}
`;

const StyledCardFigcaption = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${StyledCard}:hover & {
    opacity: 1;
  }
`;

const StyledCardFigcaptionBox = styled.div`
  border: 3px solid white;
  box-sizing: border-box;
  width: 100%;
  /* height: 100%; */
  overflow-y: scroll;
  border-radius: 5px;
`;

const StyledCardImg = styled.img.attrs<any>(() => ({}))`
  ${(props) => {
    const alt = props.alt;
    const name: any = {
      main: `
      width : 100%;
      height : 100%;
      object-fit : fit;
      `,
      icon: `
      width:20px;
      height:20px;
      margin: 15px 5px 0px 0px;
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
        color : white;
        font-size : 18px;
        margin-bottom : 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        // border : 1px solid red;
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
        font-size : 14px;
        `,
      content: `
        font-size : 14px;
        margin : 5px 0px;
        height : 40px;
      `,
    };

    return css`
      color: #cbcaca;
      font-family: ${(props) => props.theme.fonts.regularlfont};
      /* border: 1px solid red; */
      ${name[id]}
    `;
  }}
`;

const StyledCardRow = styled.div`
  display: flex;
  align-items: flex-end;
  color: white;

  a {
    color: white;
  }
`;

export {
  StyledCard,
  StyledCardImg,
  StyledCardBoldText,
  StyledCardText,
  StyledCardRow,
  StyledCardFigcaption,
  StyledCardFigcaptionBox,
};
