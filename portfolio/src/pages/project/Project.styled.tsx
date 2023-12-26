import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const StyledProject = styled(motion.div)`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

const StyledProjectContainer = styled.div`
  max-width: 1000px;
  height: max-content;
  padding: 0rem 1rem;
`;

const StyledProjectTitle = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      title: `
      font-size: 28px;
      margin-top: 2rem;
      `,
    };

    return css`
      font-family: ${(props) => props.theme.fonts.semiboldfont};
      text-align: center;
      ${name[id]}
    `;
  }}
`;

const StyledProjectBox = styled.div`
  /* border: 1px solid green; */
  margin: 3rem 0rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export {
  StyledProject,
  StyledProjectContainer,
  StyledProjectTitle,
  StyledProjectBox,
};
