import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { colors } from '../utils'

function SectionsTitle(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })
  return (
    <Container>
      <Title ref={ref} inView={inView}>
        {props.children}
      </Title>

      <LineaLeft inView={inView} />
      <LineaRight inView={inView} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  align-items: center;
`

const LineaLeft = styled.div`
  position: absolute;
  background: ${colors.primary};
  height: 4px;
  width: 30px;
  margin-right: -1px;
  left: ${({ inView }) => (inView ? '50%' : '0')};
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.4s;
  transition-delay: 0.3s;
  bottom: 50px;
  @media (min-height: 1100px) and (min-width: 1000px) {
    top: 120px;
  }
`
const LineaRight = styled.div`
  position: absolute;
  background: ${colors.primary};
  height: 4px;
  width: 30px;
  right: ${({ inView }) => (inView ? '50%' : '0')};
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.4s;
  transition-delay: 0.3s;
  bottom: 50px;
  margin-left: -1px;
  @media (min-height: 1100px) and (min-width: 1000px) {
    top: 120px;
  }
`
const Title = styled.h2`
  color: ${colors.primary};
  text-align: center;
  z-index: 100;
  font-size: 2rem;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.5s;
`

export default SectionsTitle
