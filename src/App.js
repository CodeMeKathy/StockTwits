import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'

class App extends Component {
  render() {
    return (
      <Container fluid className='App'>
        <Row>
          <Col>
            <h1>Hello, world!</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
