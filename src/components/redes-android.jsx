import styled from 'styled-components'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub, FiMail } from 'react-icons/fi'

function RedesAndroid() {
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
  display: none;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`

const RedesList = styled.ul`
  width: 60vw;
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
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      color: orange;
      transform: translateY(-3px);
    }
  }
`

export default RedesAndroid
