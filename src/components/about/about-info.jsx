import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { colors, device } from '../../utils'
import { about } from '../../data'
// iconos
import { IconContext } from 'react-icons'
import { DiResponsive } from 'react-icons/di'
import { SiSpeedtest } from 'react-icons/si'
import { BiRocket } from 'react-icons/bi'
import { MdLightbulbOutline } from 'react-icons/md'

function AboutInfo() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  })
  const IconsArray = [DiResponsive, SiSpeedtest, BiRocket, MdLightbulbOutline]

  return (
    <Container>
      <Wrapper>
        {about.map((data, i) => {
          const Icon = IconsArray[i]
          return (
            <IconTextContainer ref={ref} inView={inView} delay={data.delay}>
              <Shape>
                <IconContext.Provider value={{ size: data.size }}>
                  <Icon />
                </IconContext.Provider>
              </Shape>
              <Title>{data.title}</Title>
              <Text>{data.text1}</Text>
              <Text>{data.text2}</Text>
            </IconTextContainer>
          )
        })}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    display: none;
  }
`

const Wrapper = styled.div`
  text-align: center;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  & svg {
    font-size: 3rem;
    color: ${colors.secondary};
  }
  @media ${device.desktop} {
    width: 60%;
  }
`

const IconTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) => (inView ? 'rotateX(0)' : 'rotateX(90deg)')};
  transition: all 1.1s;
  transition-delay: ${(props) => props.delay}s; ;
`

const Title = styled.p`
  text-align: center;
  color: ${colors.primary};
  font-size: 1.2rem;
`

const Text = styled.p`
  text-align: center;
  color: ${colors.primary};
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1px;
  white-space: nowrap;
`

const Shape = styled.div`
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
  width: 100px;
  height: 100px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default AboutInfo
