import RedesDesktop from '../components/redes/RedesDesktop'
import AboutContainer from '../containers/about/AboutContainer'
import ProjectsContainer from '../containers/projects/ProjectsContainer'
import FooterContainer from '../containers/footer/FooterContainer'
import Loading from '../components/loading/Loading'
import Header from '../containers/header/Header'

function Main() {
  return (
    <>
      <Loading />
      <Header />
      <RedesDesktop />
      <AboutContainer />
      <ProjectsContainer />
      <FooterContainer />
    </>
  )
}

export default Main
