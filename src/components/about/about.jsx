// components
import AboutInfo from './about-info'
import Stats from './about-stats'

// librerias
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import SectionsTitle from '../titles'

function About() {
  return (
    <>
      <Container>
        <SectionsTitle>SOBRE MI</SectionsTitle>
        <AboutInfo />
        <Stats />
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #0a192f;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default About
