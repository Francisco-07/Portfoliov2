import AboutInfo from './about-info'
import Stats from './about-stats'
import styled from 'styled-components'
import SectionsTitle from '../titles'

function About() {
  return (
    <>
      <Container id='about'>
        <SectionsTitle>SOBRE MI</SectionsTitle>
        <AboutInfo />
        <Stats />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default About
