import styled, { css } from 'styled-components';

const StyledAboutme = styled.div`
  /* border: 1px solid red; */
  margin: 2rem;
  display: flex;
  padding: 3rem;
  font-family: ${(props) => props.theme.fonts.regularfont};
  line-height: 150%;
  font-size: regular;
`;

const StyledProfileImg = styled.img.attrs<any>(() => ({}))`
  ${(props) => {
    const alt = props.alt;
    const name: any = {
      profile: `
      width: 300px;
      margin-right: 2rem;
      border-radius: 1rem;
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
`;

const StyledAboutRowDiv = styled.div`
  display: flex;
  margin: 10px 0px;
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
