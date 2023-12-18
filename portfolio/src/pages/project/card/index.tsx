import { useState } from 'react';
import {
  StyledCard,
  StyledCardBoldText,
  StyledCardFigcaption,
  StyledCardFigcaptionBox,
  StyledCardImg,
  StyledCardRow,
  StyledCardText,
} from './Card.styled';
import Detail from '../detail';

const Card = (props: any) => {
  const name = props.ProjectName;
  const date = props.Date;
  const skills = props.Skills;
  const position = props.Position;
  const content = props.Content;
  const imgUrl = props.ImgSrc;

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const openDetail = () => {
    setIsDetailOpen(!isDetailOpen);
    console.log(isDetailOpen);
  };

  const closeDetail = () => {
    setIsDetailOpen(!isDetailOpen);
    console.log('close');
  };
  return (
    <StyledCard id="card" onClick={openDetail}>
      <StyledCardImg
        src={process.env.PUBLIC_URL + '/project' + imgUrl}
        alt="main"
      />
      <StyledCardFigcaption>
        <StyledCardFigcaptionBox>
          <StyledCard id="box">
            <StyledCardBoldText id="title">{name}</StyledCardBoldText>
            <StyledCardText id="date">{date}</StyledCardText>
            <StyledCardText id="content">{content}</StyledCardText>
            <StyledCardRow>
              {skills?.map((skill: any) => (
                <StyledCardImg
                  src={process.env.PUBLIC_URL + '/skills/' + skill + '.png'}
                  alt="icon"
                  key={skill.id}
                />
              ))}
            </StyledCardRow>
            <StyledCardRow>
              <StyledCardImg
                src={process.env.PUBLIC_URL + '/icon/github.png'}
                alt="icon"
              />
              GitHub
            </StyledCardRow>
          </StyledCard>
        </StyledCardFigcaptionBox>
      </StyledCardFigcaption>
      {isDetailOpen && (
        <Detail
          isDetailOpen={isDetailOpen}
          closeDetail={closeDetail}
          ProjectName={name}
          Date={date}
          Skills={skills}
          Position={position}
          Content={content}
          ImgSrc={imgUrl}
        />
      )}
    </StyledCard>
  );
};

export default Card;
