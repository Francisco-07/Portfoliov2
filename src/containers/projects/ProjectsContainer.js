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
            text={info.text}
            tech1={info.tech1}
            tech2={info.tech2}
            tech3={info.tech3}
            tech4={info.tech4}
            alt={info.alt}
            img={info.img}
            reverse={info.reverse}
          />
        ))}
        {projects.map((info) => (
          <ProjectsAndroid
            key={info.key}
            title={info.title}
            text={info.text}
            tech1={info.tech1}
            tech2={info.tech2}
            tech3={info.tech3}
            tech4={info.tech4}
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
