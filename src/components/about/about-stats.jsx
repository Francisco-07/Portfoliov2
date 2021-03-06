import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { stats } from '../../data'
import { colors, device } from '../../utils'

function Stats() {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  })
  return (
    <>
      <Container>
        <Wrapper>
          <About inView={inView}>
            <Image
              alt='me'
              src='https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
            />
            <Title ref={ref}>Quien soy?</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quia voluptatem quo eum labore suscipit laboriosam
              culpa, fugiat cum voluptate atque magnam maiores nemo omnis
              eveniet.
            </Text>
          </About>

          <Estadisticas inView={inView}>
            {stats.map((data) => (
              <OuterBar key={data.key}>
                <Tech>{data.tech}</Tech>
                <BarEmpty>
                  <BarFilled
                    percent={data.percent}
                    delay={data.delay}
                    inView={inView}
                  >
                    <Percent>{data.percent + '%'}</Percent>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.2rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  @media ${device.tablet} {
    flex-direction: column;
  }
`

const OuterBar = styled.div`
  width: 50vw;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  position: relative;
  font-size: 1.25rem;
  @media ${device.tablet} {
    width: 90vw;
  }
`

const BarEmpty = styled.div`
  flex: 0.7;
  background: ${colors.primary};
  display: flex;
`
const BarFilled = styled.div`
  width: ${({ inView, percent }) => (inView ? `${percent}%` : '0%')};
  transition: all 2.7s;
  background: ${colors.lightOrange};
  transition-delay: ${(props) => props.delay}s;
`

const Tech = styled.div`
  flex: 0.3;
  white-space: nowrap;
  text-align: center;
  color: ${colors.primary};
  font-size: 1.1rem;
  background-color: ${colors.darkOrange};
`
const Percent = styled.span`
  position: absolute;
  font-size: 1.1rem;
  right: 0;
  color: #575757;
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
  transition: all 0.4s;
  opacity: ${({ inView }) => (inView ? `1` : '0')};
`
const Text = styled.p`
  width: 65%;
  text-align: center;
  font-size: 1.1rem;
  @media ${device.tablet} {
    width: 90%;
  }
`
const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 0.7rem;
  margin-top: 1.25rem;
`

const Estadisticas = styled.div`
  margin-top: 2rem;
  transition: all 1s;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
`

export default Stats
