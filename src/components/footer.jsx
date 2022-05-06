import styled from 'styled-components'
import RedesAndroid from './redes/redes-android'
import Contact from './contact'
import { useInView } from 'react-intersection-observer'
import { device } from '../utils'

// ICONOS
import { MdKeyboardArrowRight } from 'react-icons/md'

function Footer() {
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
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  background-color: #0d203d;
  position: relative;
`
const Clip = styled.div`
  position: absolute;

  top: -2px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100vw;
  height: 300px;
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
    margin-top: 0px;
  }
`
export default Footer
