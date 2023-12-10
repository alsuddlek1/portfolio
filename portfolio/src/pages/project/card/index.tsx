import {
  StyledCard,
  StyledCardBoldText,
  StyledCardImg,
  StyledCardRow,
  StyledCardText,
} from './Card.styled';

const Card = (props: any) => {
  const name = props.ProjectName;
  const date = props.Date;
  const skills = props.Skills;
  const position = props.Position;
  const content = props.Content;
  const imgUrl = props.ImgSrc;
  console.log(skills);
  return (
    <StyledCard id="card">
      <StyledCardImg
        src={process.env.PUBLIC_URL + '/project' + imgUrl}
        alt="main"
      />
      <StyledCard id="box">
        <StyledCardBoldText id="title">{name}</StyledCardBoldText>
        <StyledCardText id="content">{content}</StyledCardText>
        <StyledCardText id="date">{date}</StyledCardText>
        {/* <StyledCardRow>
          {skills?.map((skill: any) => (
            <StyledCardImg
              src={process.env.PUBLIC_URL + '/skills/' + skill + '.png'}
              alt="icon"
              key={skill.id}
            />
          ))}
        </StyledCardRow> */}
      </StyledCard>

      {/* <StyledCardRow>
        <StyledCardImg
          src={process.env.PUBLIC_URL + '/icon/github.png'}
          alt="icon"
        />
        GitHub
      </StyledCardRow> */}
    </StyledCard>
  );
};

export default Card;
