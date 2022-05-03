import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import vars from '../../utils'
// iconos
import { FiMonitor } from 'react-icons/fi'
import { GiSmartphone } from 'react-icons/gi'
import { SiSpeedtest } from 'react-icons/si'
import { BiRocket } from 'react-icons/bi'
import { MdLightbulbOutline } from 'react-icons/md'

function AboutInfo() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  })

  return (
    <Container>
      <Wrapper>
        <IconTextContainer ref={ref} inView={inView} delay={0.2}>
          <Responsive>
            <FiMonitor />
            <GiSmartphone />
          </Responsive>
          <Title>Responsive</Title>
          <Text>Mis interfaces funcionan</Text>
          <Text>en cualquier dispositivo</Text>
        </IconTextContainer>

        <IconTextContainer inView={inView} delay={0.4}>
          <Shape>
            <SiSpeedtest />
          </Shape>
          <Title>Rapidas</Title>
          <Text>Mis sitios son rapidos y</Text>
          <Text>estan libres de lag</Text>
        </IconTextContainer>

        <IconTextContainer inView={inView} delay={0.6}>
          <Shape>
            <BiRocket />
          </Shape>
          <Title>Dinamico</Title>
          <Text>Para una mayor interaccion </Text>
          <Text>y mejor experiencia</Text>
        </IconTextContainer>

        <IconTextContainer inView={inView} delay={0.8}>
          <Shape>
            <MdLightbulbOutline />
          </Shape>
          <Title>Intuitivo</Title>
          <Text>Preferencia por interfaces</Text>
          <Text>simples de usar e intuitivas</Text>
        </IconTextContainer>
      </Wrapper>
    </Container>
  )
}

export default AboutInfo
const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
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
    font-size: 3em;
    color: ${vars.colors.secondary};
  }
  @media (max-width: 900px) {
    flex-direction: column;
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
  transition: all 0.6s;
  transition-delay: ${(props) => props.delay}s; ;
`

const Title = styled.p`
  text-align: center;
  color: ${vars.colors.primary};
  font-size: 1.2em;
`

const Text = styled.p`
  text-align: center;
  color: ${vars.colors.primary};
  font-size: 1em;
  margin-top: 0;
  margin-bottom: 1px;
  @media (max-width: 1000px) {
    display: none;
  }
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
  background-color: ${vars.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Responsive = styled.div`
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
  background-color: ${vars.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    font-size: 1.8em;
  }
`
