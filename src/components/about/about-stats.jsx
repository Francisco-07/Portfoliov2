// librerias
import styled, { keyframes } from 'styled-components'
import { useInView } from 'react-intersection-observer'

// hooks
import React, { useEffect } from 'react'

// notas hacer un array con la data y mapearla para no repetir tanto codigo ya con las props en el array

function Stats() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  })
  useEffect(() => {
    console.log(inView)
  }, [inView])
  return (
    <>
      <Container>
        <Wrapper>
          <About>
            <Image
              alt='me'
              src='https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
            />
            <Title>Quien soy?</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quia voluptatem quo eum labore suscipit laboriosam
              culpa, fugiat cum voluptate atque magnam maiores nemo omnis
              eveniet.
            </Text>
          </About>

          <Estadisticas inView={inView}>
            <OuterBar>
              <Tech>CSS</Tech>
              <BarEmpty>
                <BarFilled percent={85} delay={0.5} ref={ref} inView={inView}>
                  <Percent>85%</Percent>
                </BarFilled>
              </BarEmpty>
            </OuterBar>

            <OuterBar>
              <Tech>HTML</Tech>
              <BarEmpty>
                <BarFilled percent={85} delay={0.7} inView={inView}>
                  <Percent>85%</Percent>
                </BarFilled>
              </BarEmpty>
            </OuterBar>

            <OuterBar>
              <Tech>JavaScript</Tech>
              <BarEmpty>
                <BarFilled percent={75} delay={0.9} inView={inView}>
                  <Percent>75%</Percent>
                </BarFilled>
              </BarEmpty>
            </OuterBar>

            <OuterBar>
              <Tech>React</Tech>
              <BarEmpty>
                <BarFilled percent={70} delay={1.1} inView={inView}>
                  <Percent>70%</Percent>
                </BarFilled>
              </BarEmpty>
            </OuterBar>

            <OuterBar>
              <Tech>Node JS</Tech>
              <BarEmpty>
                <BarFilled percent={70} delay={1.3} inView={inView}>
                  <Percent>70%</Percent>
                </BarFilled>
              </BarEmpty>
            </OuterBar>

            <OuterBar>
              <Tech>Mongo DB</Tech>
              <BarEmpty>
                <BarFilled percent={50} delay={1.5} inView={inView}>
                  <Percent>50%</Percent>
                </BarFilled>
              </BarEmpty>
            </OuterBar>
          </Estadisticas>
        </Wrapper>
      </Container>
    </>
  )
}

export default Stats

const OuterBar = styled.div`
  width: 50vw;
  background-color: white;
  color: #0a192f;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  @media (max-width: 900px) {
    width: 90vw;
  }
`

const BarEmpty = styled.div`
  width: 86%;
  background: white;
  display: flex;
  @media (max-width: 900px) {
    width: 76%;
  }
`
const BarFilled = styled.div`
  width: ${({ inView, percent }) => (inView ? `${percent}%` : '0%')};
  transition: all 2.7s;
  background: #f08f30;
  transition-delay: ${(props) => props.delay}s;
`

const Tech = styled.div`
  width: 14%;
  text-align: center;
  color: white;
  background-color: #f06a42;
  @media (max-width: 900px) {
    width: 24%;
  }
`
const Percent = styled.span`
  position: absolute;
  right: 0;
  color: #575757;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  align-items: center;
  width: 80vw;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
`

const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Text = styled.p`
  width: 65%;
  text-align: center;
  @media (max-width: 900px) {
    width: 90%;
  }
`
const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 0;
  margin-bottom: 10px;
  margin-top: 20px;
`

const Estadisticas = styled.div`
  margin-top: 35px;
  transition: all 1s;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  @media (max-width: 900px) {
    margin-top: 35px;
  }
`
