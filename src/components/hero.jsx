import styled, { keyframes } from 'styled-components'
import vars from '../utils'
import { FiArrowDownRight } from 'react-icons/fi'

function Hero() {
  return (
    <>
      <Container>
        <Wrapper>
          <TextContainer>
            <h2>
              <Orange>HOLA,</Orange>
            </h2>
            <h1>
              SOY FRANCISCO<Orange>.</Orange>
            </h1>
            <CenterIcon>
              <FiArrowDownRight />
              <h3>FRONT-END DEVELOPER</h3>
            </CenterIcon>
            <Block />
          </TextContainer>
          <ImgContainer>
            <Img src='/assets/asd.png' alt='Imgn generica' />
          </ImgContainer>
        </Wrapper>
      </Container>
    </>
  )
}

export default Hero

const apear = keyframes`
 0% { top:0; }
 100% {  top:40%; display: none; }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Block = styled.div`
  background-color: #0a192f;
  width: 100%;
  height: 200px;
  position: absolute;
  z-index: 5;
  animation-name: ${apear};
  animation-duration: 2.2s;
  animation-iteration-count: 1;
`

const Wrapper = styled.div`
  padding-top: 50px;
  width: 80%;
  height: 100vh;
  display: flex;
  @media (max-width: 1160px) {
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  flex: 1;
  position: relative;
  margin-top: 80px;

  h1 {
    font-size: 50px;
    margin: 0;
  }
  h2 {
    font-size: 40px;
    margin: 0;
  }
  h3 {
    font-size: 30px;
    margin: 0;
  }
  svg {
    font-size: 30px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    flex: 0;
    margin-top: 30px;
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 22px;
    }
    svg {
      font-size: 30px;
    }
  }
`
const CenterIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  @media (max-width: 900px) {
    margin-top: 17px;
    margin-left: -4px;
  }
`

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 6;
  @media (max-width: 900px) {
    flex: 0;
  }
`
const Img = styled.img`
  width: 400px;
  height: auto;
`
const Orange = styled.span`
  color: ${vars.colors.lightOrange};
`
