import styled from 'styled-components'
import React, { useState } from 'react'
import { colors } from '../utils'

// ICONOS
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ImCross /> : <GiHamburgerMenu />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Blur />
        <MenuWrapper>
          {/* <Resume>Curriculum</Resume> */}
          <Items href='#about' onClick={() => setIsOpen(false)}>
            Sobre mi
          </Items>
          <Items href='#work' onClick={() => setIsOpen(false)}>
            Proyectos
          </Items>
          <Items href='#contact' onClick={() => setIsOpen(false)}>
            Contacto
          </Items>
        </MenuWrapper>
      </Menu>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100vw;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  height: 50px;
  background-color: ${colors.secondary};
  z-index: 999;
`

const Menu = styled.div`
  font-size: 1.2rem;
  @media (max-width: 900px) {
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    transform: translate(0%, -50%);
    left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    transition: 0.2s ease-in-out;
    padding: 0;
    margin: 0;
    gap: 0;
    z-index: 10;
  }
`
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.secondary};
    width: 70vw;
    height: 100vh;
  }
`
const Blur = styled.div`
  display: none;
  @media (max-width: 900px) {
    backdrop-filter: blur(1.8px);
    display: flex;
    width: 30vw;
    height: 100vh;
  }
`

// const Resume = styled.a`
//   cursor: pointer;
//   padding: 0.2rem;
//   margin-left: 0.6rem;
//   background-color: white;
//   color: ${colors.secondary};
// `

const Items = styled.a`
  cursor: pointer;
  border-left: 1px solid transparent;
  padding-left: 0.6rem;
  &:hover {
    border-left: 1px solid white;
  }
`
const Hamburger = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    z-index: 11;
    & svg {
      font-size: 1.5rem;
    }
  }
`

export default Navbar
