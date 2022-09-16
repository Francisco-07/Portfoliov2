import styled, { keyframes } from 'styled-components'
import { colors, device, size } from '../../utils'
import { FiArrowDownRight } from 'react-icons/fi'

function Hero() {
  return (
    <>
      <Container>
        <Wrapper>
          <TextContainer>
            <h1>
              <Text>
                <span>FRANCISCO</span>

                <span>GARCIARENA</span>
              </Text>
            </h1>
            <Subtitle>
              <FiArrowDownRight />
              <h3>
                FRONT<Red>-</Red>
                END DEVELOPER
              </h3>
            </Subtitle>
          </TextContainer>
          <Center>
            <a href='#about'>
              <Button>SOBRE MI</Button>
            </a>
          </Center>
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
const frame = keyframes`
  0% {
    opacity:0 ;
    transform:translate(0px, 50px); 
  }
  50% {
    opacity:0 ;
    transform:translate(0px, 50px); 
  }
  100% {
    opacity:1 ;
    transform:translate(0px, 0px); 
  }
`

const reveal = keyframes`
  0% {
    opacity:0 ;
    transform:translate(0px, 80px) ;
    clip-path: inset(0 0 100% 0);
  }
  70% {
    opacity:0 ;
    transform:translate(0px, 80px) ;
    clip-path: inset(0 0 100% 0);
  }
  100% {
    opacity:1 ;
    transform:translate(0px, 0px) ;
    clip-path: inset(0 0 0 0);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media ${device.mobileL} {
    margin-top: ${size.large};
  }
`
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: ${size.big} 0;
  @media ${device.mobileL} {
    align-items: center;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Text = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileL} {
    align-items: center;
    gap: ${size.small};
    padding: ${size.xsmall};
    background: linear-gradient(to right, white 8px, transparent 8px) 0 0,
      linear-gradient(to left, white 8px, transparent 8px) 100% 100%,
      linear-gradient(to bottom, white 8px, transparent 8px) 0 0,
      linear-gradient(to top, white 8px, transparent 8px) 100% 100%;
    animation: 2.4s ${frame};
    background-repeat: no-repeat;
    background-size: 20px 20px;
    position: relative;
  }

  span {
    animation: 2.2s ${reveal};
  }
`

const Button = styled.div`
  animation: 4s ${opacity};
  outline: 0;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid ${colors.red};
  color: ${colors.white};
  background-color: ${colors.red};
  padding: ${size.small} ${size.medium};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
  font-weight: 800;
  font-size: 1.5rem;
  :hover {
    background: 0 0;
    color: ${colors.red};
  }
`

const TextContainer = styled.div`
  white-space: nowrap;
  h1 {
    font-size: 4.8rem;
    letter-spacing: 2px;
  }
  h3 {
    font-size: 2.8rem;
    animation: 2.8s ${reveal};
    letter-spacing: 2px;
  }
  svg {
    font-size: 2.2rem;
    animation: 2.8s ${reveal};
    margin-left: ${size.big};
    color: ${colors.red};
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
      color: ${colors.red};
    }
  }
  @media ${device.tablet} {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2rem;
    }
    svg {
      font-size: 1.8rem;
      margin-left: 0px;
      color: ${colors.red};
    }
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
      font-size: 2.7rem;
    }

    h3 {
      font-size: 1.3rem;
    }
    svg {
      font-size: 1.3rem;
      margin-left: 0px;
    }
  }
`
const Subtitle = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    margin-top: ${size.big};
  }
`

const Red = styled.span`
  color: ${colors.red};
`

export default Hero
