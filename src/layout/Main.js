import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import RedesDesktop from '../components/redes/RedesDesktop'
import AboutContainer from '../containers/about/AboutContainer'
import ProjectsContainer from '../containers/projects/ProjectsContainer'
import FooterContainer from '../containers/footer/FooterContainer'
import Loading from '../components/loading/Loading'

function Main() {
  return (
    <>
      <Loading />
      <Navbar />
      <Hero />
      <RedesDesktop />
      <AboutContainer />
      <ProjectsContainer />
      <FooterContainer />
    </>
  )
}

export default Main
