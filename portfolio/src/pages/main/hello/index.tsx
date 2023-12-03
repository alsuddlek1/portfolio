import { StyledHello, TypeAnimation } from './Hello.styled';

const Hello = () => {
  const title = '안녕하세요,';
  const content = '프론트앤드 개발자 손민영입니다 :)';

  return (
    <StyledHello>
      {title}
      <TypeAnimation length={content.length}>
        <p>{content}</p>
      </TypeAnimation>
    </StyledHello>
  );
};

export default Hello;
