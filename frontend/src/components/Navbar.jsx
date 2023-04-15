import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../media/images/logo.png';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../styles/components.css'
import Industries from '../pages/Industries';


const mrNavbar = () => {
  return (
    <>
      <div className='navbar-container'>
        <Navbar sticky='true' expand='lg' className="navbar">
          <Container fluid>
            <Navbar.Brand href="/"><img src={Logo} alt="logo" className='img-fluid' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <Link to='/'><img src={Logo} alt="logo" className='img-fluid' /></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <div className='search-navbar-tab'>
                    <input placeholder='search'></input>
                  </div>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href='/covid' >Covid-19 Impact</Nav.Link>
                  <Nav.Link href='/services' >Services</Nav.Link>
                  <NavDropdown title="Industries" className='industries-dropdown'>
                    <Industries/>
                  </NavDropdown>
                  <Nav.Link href="/forthcomings-reports">Forthcoming Reports</Nav.Link>
                  <Nav.Link href="/insights">Insights</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contactus">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default mrNavbar