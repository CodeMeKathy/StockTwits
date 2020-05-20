import React, { useState } from 'react'
// import './TweetContainer.css'

// React Bootstrap Component Imports
import Container from 'react-bootstrap/Container'

const TweetContainer = props => {
  const [symbolSearch, setSymbolSearch] = useState('')
  return (
    <Container fluid className='TweetContainer'>
      <h2>TweetContainer</h2>
    </Container>
  )
}

export default TweetContainer
