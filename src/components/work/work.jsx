import styled from 'styled-components'
import SectionsTitle from '../titles'
import Projects from './projects'
import ProjectsAndroid from './projects-android'
import { projects } from '../../data'

function Work() {
  return (
    <>
      <Container id='work'>
        <SectionsTitle>PROYECTOS</SectionsTitle>
        {projects.map((info) => (
          <Projects
            key={info.key}
            title={info.title}
            text={info.text}
            tech1={info.tech1}
            tech2={info.tech2}
            tech3={info.tech3}
            tech4={info.tech4}
            directionBoxLeft={info.directionBoxLeft}
            directionBoxRight={info.directionBoxRight}
            directionTitle={info.directionTitle}
            direction={info.direction}
            icons={info.icons}
            alt={info.alt}
            img={info.img}
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

export default Work
