import styled from 'styled-components'
import { projects } from '../../data'
import { colors, device } from '../../utils'
import { useInView } from 'react-intersection-observer'

// ICONOS
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

function Projects() {
  const [ref1, inView1] = useInView({ triggerOnce: true })
  const [ref2, inView2] = useInView({ triggerOnce: true })
  const [ref3, inView3] = useInView({ triggerOnce: true })

  const refArray = [ref1, ref2, ref3]
  const viewArray = [inView1, inView2, inView3]

  return (
    <>
      <Container>
        {projects.map((data, i) => (
          <Wrapper ref={refArray[i]} key={data.key} direction={data.direction}>
            <BoxOne inView={viewArray[i]}>
              <Title directionTitle={data.directionTitle}>{data.title}</Title>
              <Info
                inView={viewArray[i]}
                boxLeft={data.directionBoxLeft}
                boxRight={data.directionBoxRight}
              >
                {data.text}
              </Info>
              <Tech directionTech={data.directionTech}>
                <div>{data.tech1}</div>
                <div>{data.tech2}</div>
                <div>{data.tech3}</div>
                <div>{data.tech4}</div>
              </Tech>
              <Icons directionIcons={data.icons}>
                <FiGithub />
                <BsBoxArrowUpRight />
              </Icons>
            </BoxOne>
            <BoxTwo inView={viewArray[i]}>
              <Img alt={data.alt} src={data.img} />
            </BoxTwo>
          </Wrapper>
        ))}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
  @media ${device.tablet} {
    display: none;
  }
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-direction: ${(props) => props.direction};
  margin-bottom: 25px;
  @media ${device.desktop} {
    width: 60%;
  }
`

const BoxOne = styled.div`
  width: 50%;
  height: 360px;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  z-index: 5;
  font-size: 1.1rem;
  @media ${device.desktop} {
    height: 500px;
  }
`
const BoxTwo = styled.div`
  width: 50%;
  height: 360px;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  z-index: 2;
  @media ${device.desktop} {
    height: 500px;
  }
`

const Title = styled.h2`
  text-align: ${(props) => props.directionTitle};
`
const Info = styled.p`
  background-color: #f08f30;
  padding: 20px;
  width: 550px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  position: absolute;
  z-index: 100;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
  transition: all 0.4s;
  transition-delay: 0.5s;
  left: ${(props) => props.boxLeft}px;
  right: ${(props) => props.boxRight}px;
`
const Tech = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 180px;
  flex-direction: ${(props) => props.directionTech};
  justify-content: ${(props) => props.directionTech};
  @media ${device.desktop} {
    margin-top: 300px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  filter: grayscale(52%) sepia(56%) brightness(46%) hue-rotate(215deg);
  &:hover {
    filter: none;
  }
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.directionIcons};
  width: 100%;
  margin-top: 1rem;
  column-gap: 0.8rem;
  & svg {
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
      color: ${colors.lightOrange};
    }
  }
`
export default Projects
