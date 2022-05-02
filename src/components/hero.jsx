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
 0% { transform: translate(0px, -200px); }
 100% {  transform: translate(0px, 0px); display:none;}
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
  animation-duration: 1.5s;
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
    font-size: ${vars.px.px13};
    margin: 0;
  }
  h2 {
    font-size: ${vars.px.px11};
    margin: 0;
  }
  h3 {
    font-size: ${vars.px.px9};
    margin: 0;
  }
  svg {
    font-size: ${vars.px.px9};
  }
  @media (max-width: 900px) {
    flex-direction: column;
    flex: 0;
    margin-top: 30px;
    h1 {
      font-size: ${vars.px.px10};
    }
    h2 {
      font-size: ${vars.px.px9};
    }
    h3 {
      font-size: ${vars.px.px7};
    }
    svg {
      font-size: ${vars.px.px7};
    }
  }
`
const CenterIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
    width: 330px;
  }
`
const Orange = styled.span`
  color: ${vars.colors.lightOrange};
`
