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
  const id = props.id;
  const title = props.title;
  const date = props.date;
  const skills = props.skills;
  const content = props.content;
  const imgsrc = props.imgsrc;

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const openDetail = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const closeDetail = () => {
    setIsDetailOpen(!isDetailOpen);
    console.log('close');
  };

  return (
    <StyledCard id="card" onClick={openDetail}>
      <StyledCardImg
        src={process.env.PUBLIC_URL + '/project' + imgsrc}
        alt="main"
      />
      <StyledCardFigcaption>
        <StyledCardFigcaptionBox>
          <StyledCard id="box">
            <StyledCardBoldText id="title">{title}</StyledCardBoldText>
            <StyledCardText id="date">{date}</StyledCardText>
            <StyledCardText id="content">{content}</StyledCardText>
            <StyledCardRow>
              {skills?.map((skill: any) => (
                <StyledCardImg
                  src={process.env.PUBLIC_URL + '/skills/' + skill + '.png'}
                  alt="icon"
                  key={skill}
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
        <Detail isDetailOpen={isDetailOpen} closeDetail={closeDetail} id={id} />
      )}
    </StyledCard>
  );
};

export default Card;
