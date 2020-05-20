import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
import NavbarCustom from './Components/Navbar/Navbar'

const App = props => {
  return (
    <Container fluid className='App'>
      <Col>
        <Row>
          <NavbarCustom />
        </Row>
      </Col>
    </Container>
  )
}

export default App
