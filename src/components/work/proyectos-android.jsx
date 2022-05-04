import styled from 'styled-components'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import vars from '../../utils'
import data from '../../data'
import { useInView } from 'react-intersection-observer'

function ProyectosAndroid() {
  const [ref1, inView1] = useInView({ triggerOnce: true })
  const [ref2, inView2] = useInView({ triggerOnce: true })
  const [ref3, inView3] = useInView({ triggerOnce: true })

  const inViewOrder = (i) => {
    if (i === 1) {
      return inView1
    } else if (i === 2) {
      return inView2
    } else {
      return inView3
    }
  }
  const refOrder = (i) => {
    if (i === 1) {
      return ref1
    } else if (i === 2) {
      return ref2
    } else {
      return ref3
    }
  }

  return (
    <>
      {data.proyectos.map((info, i) => (
        <Container key={info.key} inView={inViewOrder(i)} ref={refOrder(i)}>
          <AndroidBox>
            <AndroidTitle>{info.title}</AndroidTitle>
            <AndroidText>{info.text}</AndroidText>
            <AndroidTech>
              <div>{info.tech1}</div>
              <div>{info.tech2}</div>
              <div>{info.tech3}</div>
              <div>{info.tech4}</div>
            </AndroidTech>
            <Icons>
              <FiGithub />
              <BsBoxArrowUpRight />
            </Icons>
          </AndroidBox>
        </Container>
      ))}
    </>
  )
}
const Container = styled.div`
  display: none;

  @media (max-width: 900px) {
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transition: all 0.5s;
    margin-top: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
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
      color: ${vars.colors.secondary};
    }
  }
`
const AndroidBox = styled.div`
  background: linear-gradient(rgba(221, 82, 18, 0.5), rgba(221, 82, 18, 0.5)),
    url('/assets/asd.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  width: 74%;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.75);
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

export default ProyectosAndroid
