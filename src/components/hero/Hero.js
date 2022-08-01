import styled, { keyframes } from 'styled-components'
import { colors, device } from '../../utils'
import { FiArrowDownRight } from 'react-icons/fi'
import { BsArrowDownSquare } from 'react-icons/bs'
// import { useInView } from 'react-intersection-observer'

function Hero() {
  // const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <>
      <Container>
        <Wrapper>
          <TextContainer>
            <Me>
              <h1>FRANCISCO</h1>
              <h1>GARCIARENA</h1>
            </Me>
            <CenterIcon>
              <FiArrowDownRight />
              <h3>
                FRONT<Orange>-</Orange>
                END DEVELOPER
              </h3>
            </CenterIcon>
          </TextContainer>
          <Button>
            <a href='#about'>
              <BsArrowDownSquare />
            </a>
          </Button>
        </Wrapper>
      </Container>
    </>
  )
}

const opacity = keyframes`
  0% {
    opacity:0 ;
  }
  80% {
    opacity:0 ;
  }
  100% {
    opacity:1 ;
  }
`
const reveal = keyframes`
  0% {
    opacity:0 ;
    clip-path: inset(100% 0 0 0);
  }
  70% {
    opacity:0 ;
    clip-path: inset(100% 0 0 0);
  }
  100% {
    opacity:1 ;
    clip-path: inset(0 0 0 0);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media ${device.landscape} {
    height: 100%;
  }
`
const Me = styled.div`
  width: 80%;
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
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

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  animation: 3.3s ${opacity};
  svg {
    font-size: 3rem;
    transition: all 0.3s;
    &:hover {
      transform: translatey(3px);
    }
  }
  @media ${device.mobileL} {
    svg {
      font-size: 6rem;
    }
  }
`

const TextContainer = styled.div`
  white-space: nowrap;
  h1 {
    font-size: 4.8rem;
    animation: 2.2s ${reveal};
  }

  h3 {
    font-size: 2.8rem;
    animation: 2.8s ${reveal};
    letter-spacing: 3px;
  }
  svg {
    font-size: 2.2rem;
    animation: 2.4s ${reveal};
    margin-left: 70px;
    color: ${colors.lightOrange};
  }
  @media ${device.laptop} {
    h1 {
      font-size: 4rem;
    }

    h3 {
      font-size: 3rem;
      letter-spacing: 3px;
    }
    svg {
      font-size: 1.8rem;
      margin-left: 70px;
      color: ${colors.lightOrange};
    }
  }
  @media ${device.tablet} {
    h1 {
      font-size: 3.8rem;
    }

    h3 {
      font-size: 2.6rem;
      letter-spacing: 3px;
    }
    svg {
      font-size: 2.3rem;
      margin-left: 70px;
      color: ${colors.lightOrange};
    }
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
      transform: scale(1.5);
      font-size: 2.6rem;
      margin-bottom: 60px;
    }

    h3 {
      font-size: 1.8rem;
    }
    svg {
      font-size: 1.3rem;
      margin-left: 0px;
    }
  }
`
const CenterIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

const Orange = styled.span`
  color: ${colors.lightOrange};
`

export default Hero
