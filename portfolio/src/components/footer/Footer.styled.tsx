import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0rem;
  color: black;
  margin-top: auto;
  font-family: ${(props) => props.theme.fonts.lightfont};
`;

const StyledFooterText = styled.div`
  display: flex;
  a {
    margin: 0px 20px 5px 20px;
    color: black;
    text-decoration: none;
  }
`;

export { StyledFooter, StyledFooterText };
