import styled, { keyframes } from 'styled-components';

const StyledHello = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin: 3rem 0px 0px 0rem;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 24px;
  align-items: center;
`;

const typing = keyframes`
    from {width : 0}
  `;

const caret = keyframes`
  50% { border-right-color: transparent; }
`;

const TypeAnimation = styled.div.attrs<{ length: number }>(({ length }) => ({
  length: length * 2,
}))`
  /* font:
    bold 200% Consolas,
    Monaco,
    monospace; */
  width: ${(props) => props.length}ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.05em solid;
  animation:
    ${typing} 3s steps(${(props) => props.length}),
    ${caret} 1s steps(1) infinite;
`;

export { StyledHello, typing, TypeAnimation };
