import styled, { keyframes } from 'styled-components'
import vars from '../utils'
import { FiArrowDownRight } from 'react-icons/fi'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'

function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false })
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
            <Arrow ref={ref} inView={inView}>
              <a href='#about'>
                <AiOutlineArrowDown />
              </a>
            </Arrow>
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
  height: 100vh;
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    margin-top: 0;
  }
`

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  @media (min-height: 1200px) and (min-width: 760px) {
    flex-direction: column;
  }

  @media (min-height: 1200px) and (min-width: 760px) {
    width: 60%;
    height: 80%;
    flex-direction: column;
  }
  @media (min-height: 1200px) and (min-width: 1000px) {
    width: 60%;
    height: 70%;
    flex-direction: row;
  }
  @media (max-height: 400px) and (max-width: 1000px) {
    flex-direction: row;
  }
`
const Arrow = styled.div`
  display: none;
  @media (min-height: 1200px) and (min-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 30;
    & svg {
      font-size: 50px;
      opacity: ${({ inView }) => (inView ? '1' : '0')};
      transform: ${({ inView }) =>
        inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
      transition: all 0.4s;
      transition-delay: 0.3s;
    }
  }
  @media (min-height: 800px) and (max-height: 900px) and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    bottom: 200px;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 30;
    & svg {
      font-size: 50px;
      opacity: ${({ inView }) => (inView ? '1' : '0')};
      transform: ${({ inView }) =>
        inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
      transition: all 0.4s;
      transition-delay: 0.3s;
    }
  }

  @media (min-height: 1200px) and (min-width: 1000px) {
    display: none;
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
  flex: 1;
  margin-top: 60px;
  margin-left: 10px;
  position: relative;
  h1 {
    font-size: 2.4rem;
    margin: 0;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  h3 {
    font-size: 1.4rem;
    margin: 0;
  }
  svg {
    font-size: 2rem;
    margin-left: 70px;
  }
  @media (max-width: 1100px) {
    flex: 0;
  }
  @media (max-width: 900px) {
    svg {
      margin-left: -2px;
    }
  }
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    flex: 1;
    margin-top: 0;
  }
`
const CenterIcon = styled.div`
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  flex: 1;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    flex: 0;
  }
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    flex: 1;
  }
`
const Img = styled.img`
  width: 500px;
  height: 500px;
  @media (max-width: 900px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 300px) {
    width: 250px;
    height: 250px;
  }
  @media (min-height: 1200px) and (min-width: 760px) {
    width: 550px;
    height: 550px;
  }
  @media (min-height: 1200px) and (min-width: 1000px) {
    width: 650px;
    height: 650px;
  }
  @media screen and (max-width: 1000px) and (orientation: landscape) {
    width: 300px;
    height: 300px;
  }
`
const Orange = styled.span`
  color: ${vars.colors.lightOrange};
`

export default Hero
