import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledMain = styled(motion.div)`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  cursor: default;
  margin-bottom: 5rem;
`;

const StyledMobileMain = styled(motion.div)`
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  cursor: default;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
`;

const StyledMainContainer = styled.div`
  max-width: 800px;
  height: max-content;
`;

const StyledHelloContainer = styled.div`
  border: 1px solid yellow;
  margin: 10vh;
`;

export {
  StyledMain,
  StyledMainContainer,
  StyledHelloContainer,
  StyledMobileMain,
};
