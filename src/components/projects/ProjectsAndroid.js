import styled from 'styled-components'
import { device, colors, size } from '../../utils'
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
          <ImgContainer img={props.img}></ImgContainer>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <Tech>
            {props.tech.map((tech) => {
              return <div>{tech}</div>
            })}
          </Tech>
          <Icons>
            <a target='_blank' rel='noreferrer' href={props.linkRepo}>
              <FiGithub />
            </a>
            <a target='_blank' rel='noreferrer' href={props.linkProject}>
              <BsBoxArrowUpRight />
            </a>
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
    margin-bottom: ${size.xmedium};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    position: relative;
  }
`

const Wrapper = styled.div`
  background: linear-gradient(rgba(255, 71, 66, 0.8), rgba(255, 71, 66, 0.8));
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  padding: ${size.small};
  width: 350px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: ${size.xmedium};
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
  @media ${device.mobileL} {
    width: 90%;
    min-height: 300px;
  }
  h2 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.4rem;
  }
`

const ImgContainer = styled.div`
  background: linear-gradient(rgba(255, 71, 66, 0.3), rgba(255, 71, 66, 0.3)),
    url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  width: 100%;
  min-height: 240px;
  border-radius: 3px;
  margin-bottom: ${size.small};
`
const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${size.xsmall};
  font-size: 1.2rem;
  text-transform: uppercase;
  div {
    background-color: ${colors.blue};
    border-radius: 3px;
    padding: 0 ${size.xsmall};
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${size.small};
  column-gap: ${size.small};
  & svg {
    cursor: pointer;
    font-size: 1.7rem;
  }
`
export default ProjectsAndroid
