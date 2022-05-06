import styled from 'styled-components'
import data from '../../data'
import { colors } from '../../utils'
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
        {data.projects.map((info, i) => (
          <Wrapper ref={refArray[i]} key={info.key} direction={info.direction}>
            <BoxOne inView={viewArray[i]}>
              <Title directionTitle={info.directionTitle}>{info.title}</Title>
              <Info
                inView={viewArray[i]}
                boxLeft={info.directionBoxLeft}
                boxRight={info.directionBoxRight}
              >
                {info.text}
              </Info>
              <Tech directionTech={info.directionTech}>
                <div>{info.tech1}</div>
                <div>{info.tech2}</div>
                <div>{info.tech3}</div>
                <div>{info.tech4}</div>
              </Tech>
              <Icons directionIcons={info.icons}>
                <FiGithub />
                <BsBoxArrowUpRight />
              </Icons>
            </BoxOne>
            <BoxTwo inView={viewArray[i]}>
              <Img alt={info.alt} src={info.img} />
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
  margin-bottom: 70px;
  @media (max-width: 900px) {
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

  @media (min-height: 1200px) and (min-width: 1200px) {
    width: 65%;
  }
  @media (min-height: 1200px) and (min-width: 2200px) {
    width: 55%;
  }
`

const BoxOne = styled.div`
  width: 50%;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  z-index: 5;
  font-size: 1.1rem;
`
const BoxTwo = styled.div`
  width: 50%;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s;
  z-index: 2;
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
`

const Img = styled.img`
  width: 100%;
  height: 300px;
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
