import { ProjectData } from '../../data/project';
import {
  StyledProject,
  StyledProjectBox,
  StyledProjectContainer,
  StyledProjectTitle,
} from './Project.styled';
import Card from './card';

const Project = () => {
  return (
    <StyledProject>
      <StyledProjectContainer>
        <StyledProjectTitle id="title">Projects</StyledProjectTitle>
        <StyledProjectTitle>
          진행한 프로젝트 및 상세정보를 확인해보세요!
        </StyledProjectTitle>
        <StyledProjectBox>
          {ProjectData?.map((project: any) => (
            <Card
              key={project.title}
              date={project.date}
              skills={project.skills}
              position={project.position}
              content={project.content}
              imgsrc={project.imgsrc}
            />
          ))}
        </StyledProjectBox>
      </StyledProjectContainer>
    </StyledProject>
  );
};

export default Project;
