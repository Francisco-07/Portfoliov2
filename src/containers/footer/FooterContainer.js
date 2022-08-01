import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { device } from '../../utils'

// ICONOS
import { MdKeyboardArrowRight } from 'react-icons/md'
import RedesAndroid from '../../components/redes/RedesAndroid'
import Contact from '../../components/footer/Contact'

function FooterContainer() {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [ref1, inView1] = useInView({ triggerOnce: true })
  return (
    <>
      <Container ref={ref} inView={inView} id='contact'>
        <Clip />
        <Contact />
        <RedesAndroid />
        <Author id='Contacto' ref={ref1} inView={inView1}>
          Desarrollo
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Francisco-07'
          >
            {' '}
            <MdKeyboardArrowRight /> Francisco Garciarena
          </a>
        </Author>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  background-color: #0d203d;
`
const Clip = styled.div`
  width: 100vw;
  height: 300px;
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translate(-50%, 0);
  clip-path: polygon(50% 0, 100% 0, 50% 17%, 0 0);
  background-color: #0a192f;
`

const Author = styled.p`
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  padding: 40px;
  margin-bottom: 0;
  height: 100%;
  display: flex;
  margin-top: 1.8rem;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  color: white;
  & a {
    display: flex;
    align-items: center;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    & svg {
      cursor: pointer;
      margin-left: 2px;
      margin-right: 2px;
      font-size: 2.1rem;
    }
  }
  @media ${device.laptop} {
    text-align: center;
    margin-top: 0;
  }
`
export default FooterContainer
