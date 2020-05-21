import React from 'react'
import './App.css'

// React Bootstrap Component Imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Custom Components
import NavbarCustom from './Components/Navbar/Navbar'
import TweetContainer from './Components/TweetContainer/TweetContainer'

const App = props => {
  return (
    <Container fluid className='App'>
      <Col>
        <Row>
          <NavbarCustom />
          <TweetContainer />
        </Row>
      </Col>
    </Container>
  )
}

export default App
