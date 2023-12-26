import styled, { css } from 'styled-components';

const StyledAboutme = styled.div`
  /* border: 1px solid red; */
  /* width: 700px; */
  margin: 3rem 0rem 5rem 0rem;
  display: flex;
  font-family: ${(props) => props.theme.fonts.regularfont};
  line-height: 150%;
`;

const StyledProfileImg = styled.img.attrs<any>(() => ({}))`
  ${(props) => {
    const alt = props.alt;
    const name: any = {
      profile: `
      width: 350px;
      height : 450px;
      margin-right: 2rem;
      border-radius: 5px;
      object-fit: cover;
      `,
      icon: `
      width:20px;
      height:20px;
      margin-right: 10px;
      `,
      tag: `
      width:20px;
      height:20px;
      margin-right: 5px;
      `,
    };

    return css`
      ${name[alt]}
    `;
  }}
`;

const StyledAboutContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledAboutRowDiv = styled.div`
  display: flex;
  margin: 8px 0px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledAboutText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const font: any = {
      aboutme: `
      
      margin : 15px 0px;
      color : #808080;
      `,
      profile: `
      margin : 10px 0px;
      `,
    };

    return css`
      ${font[id]}
      font-size: 16px;
    `;
  }}
`;

const StyledAboutBoldText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const font: any = {
      title: `
      font-size: 50px;
      margin-bottom : 15px;
      `,
    };

    return css`
      ${font[id]}
      font-family: ${(props) => props.theme.fonts.semiboldfont};
    `;
  }}
`;

const StyledAboutAtag = styled.a`
  color: inherit;
  text-decoration: none;
`;

export {
  StyledAboutme,
  StyledProfileImg,
  StyledAboutContents,
  StyledAboutText,
  StyledAboutAtag,
  StyledAboutRowDiv,
  StyledAboutBoldText,
};
