import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import vars from '../utils'

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
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-height: 1100px) and (min-width: 1000px) {
    height: 200px;
  }
`

const LineaLeft = styled.div`
  position: absolute;
  background: ${vars.colors.primary};
  height: 4px;
  width: 30px;
  left: ${({ inView }) => (inView ? '50%' : '0')};
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.4s;
  transition-delay: 0.3s;
  margin-top: 80px;
  @media (min-height: 1100px) and (min-width: 1000px) {
    margin-top: 120px;
  }
`
const LineaRight = styled.div`
  position: absolute;
  background: ${vars.colors.primary};
  height: 4px;
  width: 30px;
  right: ${({ inView }) => (inView ? '50%' : '0')};
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.4s;
  transition-delay: 0.3s;
  margin-top: 80px;
  @media (min-height: 1100px) and (min-width: 1000px) {
    margin-top: 120px;
  }
`
const Title = styled.h2`
  position: absolute;
  color: ${vars.colors.primary};
  text-align: center;
  z-index: 100;
  font-size: 2rem;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 0.8s;
`

export default SectionsTitle
