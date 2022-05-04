import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import RedesAndroid from './redes-android'

function Footer() {
  return (
    <>
      <RedesAndroid />
      <Author id='Contacto'>
        Desarrollo
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/Francisco-07'
        >
          {' '}
          <MdKeyboardArrowRight /> Francisco Garciarena
        </a>
      </Author>
    </>
  )
}

const Author = styled.p`
  padding: 40px;
  margin-bottom: 0;
  height: 100%;
  display: flex;
  margin-top: 1.8rem;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  color: white;
  & a {
    display: flex;
    align-items: center;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    & svg {
      cursor: pointer;
      margin-left: 2px;
      margin-right: 2px;
      font-size: 2.1rem;
    }
  }
  @media (max-width: 900px) {
    text-align: center;
    margin-top: 0px;
  }
`
export default Footer
