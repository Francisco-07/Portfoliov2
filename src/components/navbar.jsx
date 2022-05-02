import styled from 'styled-components'
import React, { useState } from 'react'
import vars from '../utils'
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
          <Items>Resume</Items>
          <Items>Proyectos</Items>
          <Items>Contacto</Items>
        </MenuWrapper>
      </Menu>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100vw;
  justify-content: flex-end;
  align-items: center;
  padding: 0 ${vars.px.px10};
  height: 50px;
  background-color: ${vars.colors.secondary};
  @media (max-width: 900px) {
    padding: 0 ${vars.px.px8};
  }
`

const Menu = styled.div`
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
  }
`
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${vars.px.px8};
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${vars.colors.secondary};
    width: 70vw;
    height: 100vh;
    z-index: 10;
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

const Items = styled.a`
  cursor: pointer;
  border-left: 1px solid transparent;
  padding-left: 10px;
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
      font-size: ${vars.px.px8};
    }
  }
`
