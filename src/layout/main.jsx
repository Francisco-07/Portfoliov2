import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Redes from '../components/redes/redes'
import About from '../components/about/about'
import Work from '../components/work/work'
import styled, { keyframes } from 'styled-components'
import Footer from '../footer/footer'

function Main() {
  return (
    <>
      <Fade>
        <Navbar />
        <Hero />
        <Redes />
        <About />
        <Work />
        <Footer />
      </Fade>
    </>
  )
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Fade = styled.div`
  animation: 1.1s ${fadeIn} ease-out;
`

export default Main
