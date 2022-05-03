import styled from 'styled-components'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub, FiMail } from 'react-icons/fi'
import vars from '../utils'

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
    margin-bottom: 1.5rem;
  }
  & svg {
    font-size: 1.5em;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      color: ${vars.colors.lightOrange};
      transform: translateY(-3px);
    }
  }
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${vars.colors.primary};
  }
`

export default Redes
