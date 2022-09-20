import RedesDesktop from '../components/redes/RedesDesktop'
import AboutContainer from '../containers/about/AboutContainer'
import ProjectsContainer from '../containers/projects/ProjectsContainer'
import FooterContainer from '../containers/footer/FooterContainer'
import Header from '../containers/header/Header'
import Loading from '../components/loading/Loading'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

function Main() {
  const [loading, setLoading] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true })
  useEffect(() => {
    setTimeout(() => setLoading(true), 1200)
  }, [])
  return (
    <>
      {loading ? (
        <Container ref={ref} inView={inView}>
          <Header />
          <RedesDesktop />
          <AboutContainer />
          <ProjectsContainer />
          <FooterContainer />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}

const Container = styled.div`
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 2s;
`

export default Main
