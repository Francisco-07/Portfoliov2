import styled from 'styled-components'
import { colors } from '../../utils'

const ShowDate = () => {
  const date = Date().split(' ')
  const month = date[1].toUpperCase()
  const day = date[2]

  return (
    <Circle>
      <Text>
        <span>{day}</span>
        <span>{month}</span>
      </Text>
      <Work>Open to work</Work>
      <Hide />
    </Circle>
  )
}

const Hide = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 90;
  border-radius: 50%;
  background-color: ${colors.blue};
  right: 0;
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid gray;
  position: relative;
  &:hover {
    border: 1px solid white;
  }
`
const Text = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 2rem;
  z-index: 100;
`
const Work = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 200;
  font-size: 1.3rem;
`
export default ShowDate
