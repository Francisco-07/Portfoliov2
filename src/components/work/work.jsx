import styled from 'styled-components'
import SectionsTitle from '../titles'
import Projects from './projects'
import ProjectsAndroid from './projects-android'

function Work() {
  return (
    <>
      <Container id='proyectos'>
        <SectionsTitle>PROYECTOS</SectionsTitle>
        <Projects />
        <ProjectsAndroid />
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
