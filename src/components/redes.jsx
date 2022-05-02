import styled from 'styled-components'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub, FiMail } from 'react-icons/fi'
import utils from '../utils'

function Redes() {
  return (
    <>
      <Container>
        <RedesList>
          <li>
            <AiOutlineLinkedin />
          </li>
          <li>
            <FiMail />
          </li>
          <li>
            <FiGithub />
          </li>
          <li>
            <AiOutlineInstagram />
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
  @media (max-width: 900px) {
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
    margin-bottom: ${utils.px.px8};
  }
  & svg {
    font-size: ${utils.px.px8};
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      color: ${utils.colors.lightOrange};
      transform: translateY(-3px);
    }
  }
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${utils.colors.primary};
  }
`

export default Redes
