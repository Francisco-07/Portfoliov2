import styled from 'styled-components'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import vars from '../../utils'
import data from '../../data'
import { useInView } from 'react-intersection-observer'

function ProjectsAndroid() {
  const [ref1, inView1] = useInView({ triggerOnce: true })
  const [ref2, inView2] = useInView({ triggerOnce: true })
  const [ref3, inView3] = useInView({ triggerOnce: true })

  const refArray = [ref1, ref2, ref3]
  const viewArray = [inView1, inView2, inView3]

  return (
    <>
      {data.projects.map((info, i) => (
        <Container key={info.key} ref={refArray[i]} inView={viewArray[i]}>
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
  background: linear-gradient(rgba(235, 63, 5, 0.8), rgba(235, 63, 5, 0.8)),
    url('https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
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

export default ProjectsAndroid