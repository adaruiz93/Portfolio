import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'


function PortfolioNavbar() {
  return (
    <Router>
    <div>
    <Navbar fixed="top" bg="myNav" variant="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Ada Ruiz &hearts;</Navbar.Brand>
      <NavbarToggle aria-controls="basic-nav-bar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
         <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
         <Nav.Link as={Link} to="/about">About</Nav.Link>
         <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
         <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
        </Nav> 
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
    <div>
      <Switch>
        <Route path="/"><Home /></Route>
        <Route path="/projects"><Projects /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/resume"><Resume /></Route>
      </Switch>
    </div>
    </Router>
  )
}

export default PortfolioNavbar
