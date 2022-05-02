import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'

function SectionsTitle(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })
  useEffect(() => {
    console.log(inView)
  }, [inView])
  return (
    <>
      <Title ref={ref} inView={inView}>
        {props.children}
      </Title>
      <Linea inView={inView} />
    </>
  )
}

const Linea = styled.div`
  background: white;
  margin: auto;
  margin-bottom: 65px;
  height: 4px;
  width: 70px;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translateX(0)' : 'translateX(-300px)'};
  transition: all 0.4s;
  transition-delay: 0.3s;

  @media (max-width: 900px) {
    margin-bottom: 0px;
  }
`
const Title = styled.h2`
  color: white;
  text-align: center;
  z-index: 100;
  font-size: 30px;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translateX(0)' : 'translateX(300px)'};
  transition: all 0.8s;
`

export default SectionsTitle
