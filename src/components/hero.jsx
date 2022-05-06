import styled, { keyframes } from 'styled-components'
import { colors, device } from '../utils'
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

const block = keyframes`
 0% { transform: translate(0px, -200px); }
 100% {  transform: translate(0px, 0px);}
 `

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90vh;
`

const Wrapper = styled.div`
  width: 80%;
  height: 90vh;
  display: flex;
  justify-content: center;
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media ${device.desktop} {
    justify-content: center;
  }
`

const Block = styled.div`
  background-color: #0a192f;
  width: 100%;
  height: 200px;
  position: absolute;
  z-index: 5;
  animation-name: ${block};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
`

const TextContainer = styled.div`
  position: relative;
  white-space: nowrap;
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  h2 {
    font-size: 2.4rem;
    margin: 0;
  }
  h3 {
    font-size: 2rem;

    margin: 0;
  }
  svg {
    font-size: 2.2rem;
    margin-left: 70px;
  }
  @media ${device.mobileL} {
    svg {
      font-size: 2.2rem;
      margin-left: 0px;
    }
  }
`
const CenterIcon = styled.div`
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  width: 500px;
  height: 500px;
  @media ${device.desktop} {
    width: 800px;
    height: 800px;
  }
  @media ${device.laptop} {
    width: 470px;
    height: 470px;
  }
  @media ${device.mobileL} {
    width: 390px;
    height: 370px;
  }
  @media ${device.mobileM} {
    width: 340px;
    height: 340px;
  }
  @media ${device.mobileS} {
    width: 250px;
    height: 350px;
  }
`
const Orange = styled.span`
  color: ${colors.lightOrange};
`

export default Hero
