import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Container, ButtonGroup } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

function PortfolioNavbar() {
  return (
    <div>
    <Navbar fixed="top" bg="myNav" variant="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Ada Ruiz &hearts;</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-nav-bar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
         <Nav.Link href="/projects">Projects</Nav.Link>
         <Nav.Link href="/about">About</Nav.Link>
         <Nav.Link href="/contact">Contact</Nav.Link>
         <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav> 
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default PortfolioNavbar
