// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './../../assets/images/logo.png'
import { Image } from 'react-bootstrap';

function Index() {
  return (
    <Navbar bg="white" expand="md">
    <Container>
      <Navbar.Brand href="#">
        <Image src={Logo} width={40} height={40}/>
        &nbsp;Buddy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Beranda</Nav.Link>
          <Nav.Link className="px-lg-3" href="#action2">Tentang Kami</Nav.Link>
          <Nav.Link className="active" href="#action2">Pelaporan</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" color='rgb(13, 110, 253)' fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Index
