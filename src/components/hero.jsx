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
  display: flex;
  justify-content: center;
  width: 100%;
`
const Arrow = styled.div`
  display: none;
  @media (min-height: 800px) and (max-height: 900px) and (max-width: 500px) {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    width: 200px;
    height: 40px;
    z-index: 30;
    & svg {
      font-size: 50px;
      opacity: ${({ inView }) => (inView ? '1' : '0')};
      transform: ${({ inView }) =>
        inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
      transition: all 0.4s;
      transition-delay: 1.3s;
    }
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
    font-size: 2.65rem;
    margin: 0;
  }
  h2 {
    font-size: 2.25rem;
    margin: 0;
  }
  h3 {
    font-size: 1.65rem;
    margin: 0;
  }
  svg {
    font-size: 2rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    flex: 0;
    margin-top: 30px;
  }
`
const CenterIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  @media (max-width: 900px) {
    margin-left: -2px;
  }
`

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 6;
  @media (max-width: 900px) {
    flex: 0;
    flex-direction: column;
    align-items: center;
  }
`
const Img = styled.img`
  width: 400px;
  height: 100%;
  @media (max-width: 700px) {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  @media (max-width: 450px) {
    width: 330px;
    height: 330px;
  }
`
const Orange = styled.span`
  color: ${vars.colors.lightOrange};
`

export default Hero
