import styled from 'styled-components'
import vars from '../../utils'
import { useInView } from 'react-intersection-observer'

// ICONOS
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

function RedesAndroid() {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <>
      <Container ref={ref} inView={inView}>
        <RedesList>
          <li>
            <a
              rel='noreferrer'
              href='https://www.linkedin.com/in/francisco-garciarena/'
              target='_blank'
            >
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a
              rel='noreferrer'
              href='https://github.com/Francisco-07/'
              target='_blank'
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              rel='noreferrer'
              href='https://www.instagram.com/fran_garciarena/'
              target='_blank'
            >
              <AiOutlineInstagram />
            </a>
          </li>
        </RedesList>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transition: all 1s;
  }
`

const RedesList = styled.ul`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 1.25rem;
  }
  & svg {
    font-size: 2.8rem;
    &:hover {
      cursor: pointer;
      color: ${vars.colors.lightOrange};
    }
  }
`

export default RedesAndroid
