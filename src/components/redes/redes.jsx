import styled from 'styled-components'
import { colors, device } from '../../utils'

// ICONOS
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

function Redes() {
  return (
    <>
      <Container>
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
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 11;
  @media ${device.tablet} {
    display: none;
  }
`

const RedesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 1.5rem;
  }
  & svg {
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
      color: ${colors.lightOrange};
      transform: translateY(-1px);
    }
  }
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.primary};
  }
`

export default Redes
