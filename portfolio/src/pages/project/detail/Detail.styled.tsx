import styled, { css } from 'styled-components';

const StyledDetail = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000066;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const StyledDetailWindow = styled.div`
  flex-direction: column;
  position: absolute;
  display: flex;
  margin-left: auto;
  background: white;
  box-shadow:
    rgba(15, 15, 15, 0.04) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.03) 0px 3px 6px,
    rgba(15, 15, 15, 0.06) 0px 9px 24px;
  top: 72px;
  left: 72px;
  right: 72px;
  margin-right: auto;
  height: calc(100% - 144px);
  max-width: 970px;
  border-radius: 4px;
  overflow-y: scroll;
`;

const StyledDetailLayout = styled.div`
  padding-bottom: 80px;
  margin: 100px 130px;
`;

const StyledDetailBoldText = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 40px;
`;

const StyledDetailText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      category: `
      color : gray;
      `,
    };

    return css`
      ${name[id]}
      font-family: ${(props) => props.theme.fonts.regularfont};
    `;
  }}
`;

const StyledDetailImg = styled.img.attrs<any>(() => ({}))`
  ${(props) => {
    const alt = props.alt;
    const name: any = {
      projectlogo: `
      width:80px;
      height:80px;
      margin: 5px 10px 0px 0px;
      `,
      propjectMain: `
      width : 100%;
      height : auto;
        `,
    };

    return css`
      ${name[alt]}
    `;
  }}
`;

const StyledDetailCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 2fr;
`;

export {
  StyledDetail,
  StyledDetailWindow,
  StyledDetailLayout,
  StyledDetailBoldText,
  StyledDetailText,
  StyledDetailImg,
  StyledDetailCategoryGrid,
};
