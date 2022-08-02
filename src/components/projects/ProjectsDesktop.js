import styled from 'styled-components'
import { colors, device } from '../../utils'
import { useInView } from 'react-intersection-observer'

// ICONOS
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

const ProjectsDesktop = (props) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <Container>
      <Wrapper ref={ref} reverse={props.reverse}>
        <BoxInfo reverse={props.reverse} inView={inView}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Tech reverse={props.reverse}>
            <div>{props.tech1}</div>
            <div>{props.tech2}</div>
            <div>{props.tech3}</div>
            <div>{props.tech4}</div>
          </Tech>
          <Icons reverse={props.reverse}>
            <FiGithub />
            <BsBoxArrowUpRight />
          </Icons>
        </BoxInfo>
        <BoxImg reverse={props.reverse} inView={inView}>
          <img
            src='https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='test'
          />
        </BoxImg>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 350px;
  margin-bottom: 3rem;
  @media ${device.laptop} {
    display: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  position: relative;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`
const BoxInfo = styled.div`
  width: 50%;
  min-height: 300px;
  text-align: ${({ reverse }) => (reverse ? 'end' : 'start')};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  transition-delay: 0.2s;

  p {
    margin-left: ${({ reverse }) => (reverse ? '0' : '4rem')};
    margin-right: ${({ reverse }) => (reverse ? '4rem' : '0')};
    background-color: ${colors.red};
    padding: 10px;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transform: ${({ inView }) =>
      inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
    transition: all 0.4s;
    transition-delay: 0.7s;
  }
`
const BoxImg = styled.div`
  width: 50%;
  height: 350px;
  position: absolute;
  left: ${({ reverse }) => (reverse ? '60px' : 'none')};
  right: ${({ reverse }) => (reverse ? 'none' : '60px')};
  z-index: 50;
  border-radius: 4px;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  transition-delay: 0.2s;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    filter: grayscale(52%) sepia(56%) brightness(46%) hue-rotate(215deg);
    &:hover {
      filter: none;
    }
  }
`
const Icons = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 15px;
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  svg {
    cursor: pointer;
    font-size: 1.3rem;
    &:hover {
      color: ${colors.red};
    }
  }
`
const Tech = styled.div`
  display: flex;
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  gap: 5px;
  div {
    background-color: ${colors.green};
    border-radius: 3px;
    padding: 0 5px;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
  }
`

export default ProjectsDesktop
