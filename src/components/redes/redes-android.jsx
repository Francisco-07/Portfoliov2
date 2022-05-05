import styled from 'styled-components'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import vars from '../../utils'

function RedesAndroid() {
  return (
    <>
      <Container>
        <RedesList>
          <li>
            <AiOutlineLinkedin />
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
