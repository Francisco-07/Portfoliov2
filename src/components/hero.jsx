import styled from 'styled-components'
import { colors, device } from '../utils'
import { FiArrowDownRight } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <>
      <Container>
        <Wrapper ref={ref}>
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
            <Block inView={inView} />
          </TextContainer>
          <ImgContainer>
            <Img inView={inView} src='/assets/asd.png' alt='Imgn generica' />
          </ImgContainer>
        </Wrapper>
      </Container>
    </>
  )
}

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  @media ${device.landscape} {
    height: 100%;
  }
`

const Wrapper = styled.div`
  width: 80%;
  height: 90vh;
  display: flex;
  justify-content: center;
  @media ${device.desktop} {
    justify-content: center;
  }
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media ${device.landscape} {
    flex-direction: column;
    height: 100%;
  }
  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
`

const Block = styled.div`
  background-color: #0a192f;
  width: 100%;
  height: 200px;
  position: absolute;
  z-index: 5;
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(0px, -200px);'};
  transition: all 1s;
  animation-iteration-count: 1;
`

const TextContainer = styled.div`
  position: relative;
  white-space: nowrap;
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2rem;
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
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
  transition: all 1s;
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
  @media ${device.landscape} {
    width: 300px;
    height: 300px;
  }
`
const Orange = styled.span`
  color: ${colors.lightOrange};
`

export default Hero
