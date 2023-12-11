import styled, { css, keyframes } from 'styled-components';

const StyledCard = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      box: `
      padding : 10px;
      border-radius: 0px 0px 5px 5px;
      border: 2px solid gray;
      border-top : none;
      height : 130px
      `,
      card: `
      border-radius: 5px;
      overflow: hidden;
      width: 250px;
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
      height : 140px;
      object-fit:cover;
      `,
      icon: `
      width:20px;
      height:20px;
      margin: 5px 10px 0px 0px;
      `,
    };

    return css`
      ${name[alt]}
    `;
  }}
`;

const scrollLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const StyledCardBoldText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      title: `
        font-size : 18px;
        margin-bottom : 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        margin : 5px 0px;
        height : 40px;
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
