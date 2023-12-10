import styled, { css } from 'styled-components';

const StyledAboutme = styled.div`
  /* border: 1px solid red; */
  margin: 3rem 0rem;
  display: flex;
  font-family: ${(props) => props.theme.fonts.regularfont};
  line-height: 150%;
`;

const StyledProfileImg = styled.img.attrs<any>(() => ({}))`
  ${(props) => {
    const alt = props.alt;
    const name: any = {
      profile: `
      width: 250px;
      margin-right: 2rem;
      border-radius: 10px;
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
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const StyledAboutRowDiv = styled.div`
  display: flex;
  margin: 5px 0px;
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledAboutText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const font: any = {
      title: `
      font-size: 24px;
      `,
    };

    return css`
      ${font[id]}
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
};
