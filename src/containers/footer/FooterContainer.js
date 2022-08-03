import Contact from '../../components/footer/Contact'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { device, colors } from '../../utils'
import { MdKeyboardArrowRight } from 'react-icons/md'
import RedesAndroid from '../../components/redes/RedesAndroid'

function FooterContainer() {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [ref1, inView1] = useInView({ triggerOnce: true })
  return (
    <>
      <Container ref={ref} inView={inView} id='contact'>
        <Contact />
        <RedesAndroid />
        <Author id='Contacto' ref={ref1} inView={inView1}>
          Desarrollo
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Francisco-07'
          >
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
