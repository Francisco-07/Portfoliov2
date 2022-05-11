import styled from 'styled-components'
import { colors, device } from '../../utils'
import { useInView } from 'react-intersection-observer'

// ICONOS
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

function ProjectsAndroid(props) {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <>
      <Container ref={ref} inView={inView}>
        <AndroidBox>
          <AndroidTitle>{props.title}</AndroidTitle>
          <AndroidText>{props.text}</AndroidText>
          <AndroidTech>
            <div>{props.tech1}</div>
            <div>{props.tech2}</div>
            <div>{props.tech3}</div>
            <div>{props.tech4}</div>
          </AndroidTech>
          <Icons>
            <FiGithub />
            <BsBoxArrowUpRight />
          </Icons>
        </AndroidBox>
      </Container>
    </>
  )
}
const Container = styled.div`
  display: none;

  @media ${device.tablet} {
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
  }
`

const AndroidBox = styled.div`
  background: linear-gradient(rgba(235, 63, 5, 0.8), rgba(235, 63, 5, 0.8)),
    url('https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  width: 350px;
  height: 330px;
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
`

const AndroidTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.2rem;
  margin-left: 1rem;
  & div {
    margin-right: 1rem;
  }
`
const AndroidTitle = styled.div`
  font-size: 1.5rem;
  margin-left: 1rem;
`
const AndroidText = styled.div`
  font-size: 1.2rem;
  margin-left: 1rem;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  column-gap: 1.2rem;
  & svg {
    cursor: pointer;
    font-size: 1.7rem;
    &:hover {
      color: ${colors.secondary};
    }
  }
`
export default ProjectsAndroid
