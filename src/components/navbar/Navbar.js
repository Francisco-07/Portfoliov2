import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { colors, device, size } from '../../utils'

// ICONOS
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Container>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseLine /> : <GiHamburgerMenu />}
        </Hamburger>
        <Menu isOpen={isOpen}>
          <Blur />
          <Items>
            {/* <Resume>Curriculum</Resume> */}
            <Item href='#about' onClick={() => setIsOpen(false)}>
              Sobre mi
            </Item>
            <Item href='#work' onClick={() => setIsOpen(false)}>
              Proyectos
            </Item>
            <Item href='#contact' onClick={() => setIsOpen(false)}>
              Contacto
            </Item>
          </Items>
        </Menu>
      </Container>
      <NavHeight />
    </>
  )
}

const opacity = keyframes`
  0% {
    opacity:0 ;
  }
  65% {
    opacity:0 ;
  }
  100% {
    opacity:1 ;
  }
`

const NavHeight = styled.div`
  height: 100px;
`
const Container = styled.nav`
  width: 100vw;
  height: 50px;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  padding: 0 ${size.medium};
  background-color: ${colors.blue};
  z-index: 800;
`

const Menu = styled.div`
  font-size: 1.2rem;
  @media ${device.laptop} {
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    transform: translate(0%, -50%);
    left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    transition: 0.2s ease-in-out;
    z-index: 10;
  }
`
const Items = styled.div`
  transition: opacity 4s;
  display: flex;
  align-items: center;
  gap: ${size.xmedium};
  animation: 3s ${opacity};
  @media ${device.laptop} {
    animation: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blue};
    width: 70vw;
    height: 100vh;
  }
`
const Blur = styled.div`
  display: none;
  @media ${device.laptop} {
    backdrop-filter: blur(1.8px);
    display: flex;
    width: 30vw;
    height: 100vh;
  }
`

const Item = styled.a`
  cursor: pointer;
  border-left: 1px solid transparent;
  padding-left: 0.6rem;
  &:hover {
    border-left: 1px solid white;
  }
`
const Hamburger = styled.div`
  display: none;
  @media ${device.laptop} {
    display: flex;
    z-index: 11;
    animation: 3s ${opacity};
    & svg {
      font-size: 1.5rem;
      color: white;
    }
  }
`

export default Navbar
