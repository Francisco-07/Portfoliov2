import styled from 'styled-components'
import SectionsTitles from '../../components/titles/SectionTitles'
import ProjectsAndroid from '../../components/projects/ProjectsAndroid'
import ProjectsDesktop from '../../components/projects/ProjectsDesktop'
import { projects } from '../../data'

function ProjectsContainer() {
  return (
    <>
      <Container id='work'>
        <SectionsTitles>PROYECTOS</SectionsTitles>
        {projects.map((info) => (
          <ProjectsDesktop
            key={info.key}
            title={info.title}
            tech={info.tech}
            text={info.text}
            alt={info.alt}
            img={info.img}
            reverse={info.reverse}
          />
        ))}
        {projects.map((info) => (
          <ProjectsAndroid
            key={info.key}
            title={info.title}
            tech={info.tech}
            text={info.text}
            alt={info.alt}
            img={info.img}
          />
        ))}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default ProjectsContainer
