import styled from 'styled-components'
import SectionsTitle from './titles'
import vars from '../utils'
import { useInView } from 'react-intersection-observer'

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <>
      <SectionsTitle>CONTACTO</SectionsTitle>
      <Container ref={ref} inView={inView}>
        <Wrapper name='contact' method='POST' data-netlify='true' action='/'>
          <input type='hidden' name='form-name' value='contact' />
          <div>
            <DataInputs type='text' name='Nombre' placeholder='Nombre' />
          </div>

          <div>
            <DataInputs type='email' name='email' placeholder='Email' />
          </div>

          <div>
            <Text name='Mensaje' placeholder='Mensaje'></Text>
          </div>
          <Btn type='submit'>ENVIAR</Btn>
        </Wrapper>
      </Container>
    </>
  )
}
export default Contact

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(0px, 50px);'};
  transition: all 1s;
`

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const DataInputs = styled.input`
  width: 350px;
  height: 35px;
  margin-bottom: 0.6rem;
  border-style: none;
  outline: none;
  @media (max-width: 450px) {
    width: 280px;
  }
  @media (max-width: 300px) {
    width: 250px;
  }
`
const Text = styled.textarea`
  width: 350px;
  height: 150px;
  resize: none;
  outline: none;
  @media (max-width: 450px) {
    width: 280px;
  }
  @media (max-width: 300px) {
    width: 250px;
  }
`
const Btn = styled.button`
  padding: 0.7rem;
  background-color: ${vars.colors.secondary};
  border: none;
  align-self: flex-end;
  color: white;
  margin-top: 1rem;
  border: 2px solid white;
  &:hover {
    color: ${vars.colors.lightOrange};
    border: 2px solid ${vars.colors.lightOrange};
  }
`
