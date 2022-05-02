import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import data from '../../data'
import vars from '../../utils'
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

          <Estadisticas ref={ref} inView={inView}>
            {data.estadisticas.map((stats) => (
              <OuterBar key={stats.key}>
                <Tech>{stats.tech}</Tech>
                <BarEmpty>
                  <BarFilled
                    percent={stats.percent}
                    delay={stats.delay}
                    inView={inView}
                  >
                    <Percent>{stats.percent + '%'}</Percent>
                  </BarFilled>
                </BarEmpty>
              </OuterBar>
            ))}
          </Estadisticas>
        </Wrapper>
      </Container>
    </>
  )
}

export default Stats

const OuterBar = styled.div`
  width: 50vw;
  background-color: ${vars.colors.primary};
  color: ${vars.colors.secondary};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${vars.px.px7};
  position: relative;
  @media (max-width: 900px) {
    width: 90vw;
  }
`

const BarEmpty = styled.div`
  margin-left: 1px;
  width: 80%;
  background: ${vars.colors.primary};
  display: flex;
  @media (max-width: 900px) {
    width: 70%;
  }
`
const BarFilled = styled.div`
  width: ${({ inView, percent }) => (inView ? `${percent}%` : '0%')};
  transition: all 2.7s;
  background: ${vars.colors.lightOrange};
  transition-delay: ${(props) => props.delay}s;
`

const Tech = styled.div`
  width: 20%;
  text-align: center;
  color: ${vars.colors.primary};
  background-color: ${vars.colors.darkOrange};
  @media (max-width: 900px) {
    width: 30%;
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
  margin-top: ${vars.px.px14};
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
  font-size: ${vars.px.px9};
  margin: 0;
  margin-bottom: ${vars.px.px5};
  margin-top: ${vars.px.px7};
`

const Estadisticas = styled.div`
  margin-top: ${vars.px.px10};
  transition: all 1s;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  @media (max-width: 900px) {
    margin-top: ${vars.px.px10};
  }
`
