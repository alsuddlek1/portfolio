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

const StyledProfileImg = styled.img`
  border: 1px solid black;
  /* height: 25rem; */
  width: 20rem;
  margin-right: 2rem;
`;

const StyledAboutContents = styled.div`
  width: 35rem;
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
      margin-bottom: 10px;
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
};
