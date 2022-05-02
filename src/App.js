import Main from './layout/main'
import styled, { keyframes } from 'styled-components'
function App() {
  return (
    <>
      <Fade>
        <Main />
      </Fade>
    </>
  )
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Fade = styled.div`
  animation: 0.7s ${fadeIn} ease-out;
`

export default App
