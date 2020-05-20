import React, { useState } from 'react'
import './TweetContainer.css'

// React Bootstrap Component Imports
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const TweetContainer = props => {
  const [symbolSearch, setSymbolSearch] = useState('')
  return (
    <Container fluid className='TweetContainer'>
      <h2>TweetContainer</h2>
      <Row>
        <Col>
          <div className='form-group col-md-6'>
            <input
              name='symbols'
              type='text'
              className='form-control'
              placeholder='NKE, SPOT, GOOG'
              // value={symbols}
            ></input>
            <button className='btn'>Get Tweet</button>
          </div>
        </Col>
        <Col>Tweets</Col>
      </Row>
    </Container>
  )
}

export default TweetContainer
