import styled from 'styled-components'
import { device, colors } from '../../utils'
import { useInView } from 'react-intersection-observer'

// ICONOS
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

function ProjectsAndroid(props) {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <>
      <Container ref={ref} inView={inView}>
        <Wrapper>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <Tech>
            <div>{props.tech1}</div>
            <div>{props.tech2}</div>
            <div>{props.tech3}</div>
            <div>{props.tech4}</div>
          </Tech>
          <Icons>
            <FiGithub />
            <BsBoxArrowUpRight />
          </Icons>
        </Wrapper>
      </Container>
    </>
  )
}
const Container = styled.div`
  display: none;

  @media ${device.laptop} {
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transform: ${({ inView }) =>
      inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
    transition: all 0.5s;
    margin-bottom: 1.55rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    position: relative;
  }
`

const Wrapper = styled.div`
  background: linear-gradient(rgba(255, 71, 66, 0.7), rgba(255, 71, 66, 0.7)),
    url('https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  padding: 1rem;
  width: 350px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
  @media ${device.mobileL} {
    width: 90%;
    height: 300px;
  }
  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.2rem;
  }
`

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 1.2rem;
  text-transform: uppercase;
  div {
    background-color: ${colors.green};
    border-radius: 3px;
    padding: 0 5px;
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  column-gap: 1.2rem;
  & svg {
    cursor: pointer;
    font-size: 1.7rem;
  }
`
export default ProjectsAndroid
