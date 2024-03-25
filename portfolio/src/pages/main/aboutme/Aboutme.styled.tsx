import styled, { css } from 'styled-components';

const StyledAboutme = styled.div`
  margin: 3rem 0rem 5rem 0rem;
  display: flex;
  font-family: ${(props) => props.theme.fonts.regularfont};
  line-height: 150%;
`;

const StyledMobileAboutme = styled.div`
  margin: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      mobileprofile: `
      width: 270px;
      height : 270px;
      border-radius: 2px;
      object-fit: cover;
      `,
      icon: `
      width:20px;
      height:20px;
      margin-right: 10px;
      `,
      mobileicon: `
      width:15px;
      height:15px;
      margin-right: 10px;
      `,
      tag: `
      width:20px;
      height:20px;
      margin-right: 5px;
      `,
      mobiletag: `
      width:15px;
      height:15px;
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

const StyledMobileAboutContents = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

const StyledAboutRowDiv = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const font: any = {
      desktop: `
      margin: 8px 0px;
    `,
      mobile: `
      margin : 5px 0px;
    `,
    };

    return css`
      ${font[id]}
      font-size: 14px;
      display: flex;
      /* margin: 8px 0px; */
      font-family: ${(props) => props.theme.fonts.regularfont};
    `;
  }}
`;

const StyledAboutText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const font: any = {
      aboutme: `
      margin : 15px 0px;
      color : #808080;
      font-size: 16px;
      `,
      profile: `
      margin : 10px 0px;
      font-size: 16px;
      `,
      mobileaboutme: `
      margin : 5px 0px;
      color : #808080;
      font-size: 14px;
      `,
      mobileprofile: `
      margin : 10px 0px;
      font-size: 18px;
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
      mobiletitle: `
      font-size: 32px;
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
  StyledMobileAboutme,
  StyledMobileAboutContents,
};
