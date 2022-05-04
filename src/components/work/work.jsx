import styled from 'styled-components'
import SectionsTitle from '../titles'
import Proyectos from './proyectos'
import ProyectosAndroid from './proyectos-android'

function Work() {
  return (
    <>
      <Container id='proyectos'>
        <SectionsTitle>Proyectos</SectionsTitle>
        <Proyectos />
        <ProyectosAndroid />
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
