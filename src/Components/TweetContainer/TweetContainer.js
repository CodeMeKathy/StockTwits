import React, { useState } from 'react'
import './TweetContainer.css'

// React Bootstrap Component Imports
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// Imported Components
import Tweet from '../Tweet/Tweet'

// Bring in data from sample-data.json file
// Source: https://stackoverflow.com/a/52349546/3609037
const db = require('../../sample-data.json')

const TweetContainer = () => {
  const [symbol, setSymbol] = useState({})
  const [query, setQuery] = useState('')

  // Find ticker symbol object in DB that matches user input
  const findBySymbol = ticker => {
    const matchingSymbol = db.find(
      tickerSym =>
        ticker.toUpperCase() === tickerSym.symbol.symbol.toUpperCase()
    ) // Force same casing scheme for comparison
    setSymbol(matchingSymbol)
  }

  // Handle user input on submit to fetch the symbol from the API
  const handleSubmit = event => {
    event.preventDefault()
    findBySymbol(query)
    setQuery('')
  }

  return (
    <Container fluid className='TweetContainer'>
      <h2>TweetContainer</h2>
      <Row>
        <Col>
          <div className='form-group col-md-6'>
            <form onSubmit={handleSubmit}>
              <label>Enter Ticker Symbol</label>
              <input
                name='symbols'
                type='text'
                className='form-control'
                placeholder='NKE, SPOT, GOOG'
                value={query}
                onChange={event => setQuery(event.target.value)} // Store user input in state
              />
              <button type='submit' className='btn'>
                Get Tweet
              </button>
            </form>
          </div>
        </Col>
        <Col>
          <h6>Tweets</h6>
          <div className='tweets'>
            {/* If a ticker symbol has at least one object key then render the corresponding tweets  */}
            {typeof symbol === 'object' && Object.keys(symbol).length > 0 ? (
              <ul>
                {symbol.messages.map(message => {
                  return (
                    <Tweet
                      key={message.id}
                      id={message.id}
                      message={message.body}
                      symbol={symbol}
                    />
                  )
                })}
              </ul>
            ) : null}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TweetContainer
