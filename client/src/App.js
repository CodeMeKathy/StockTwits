import React, { useState, useEffect } from 'react'
import './App.css'

// React Bootstrap Component Imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Imported Components
import NavbarCustom from './Components/Navbar/Navbar'
import TweetContainer from './Components/TweetContainer/TweetContainer'
import SymbolContainer from './Components/SymbolContainer/SymbolContainer'

// Bring in data from sample-data.json
// Source: https://stackoverflow.com/a/52349546/3609037
const db = require('../../client/src/sample-data.json')

const App = () => {
  const [query, setQuery] = useState('')
  const [symbol, setSymbol] = useState({})
  const [symbolList, setSymbolList] = useState([])

  // Find ticker symbol object in DB that matches user input (via query variable)
  const findBySymbol = ticker => {
    const matchingSymbol = db.find(
      tickerSym =>
        ticker.toUpperCase() === tickerSym.symbol.symbol.toUpperCase()
    ) // Force same casing scheme for comparison
    setSymbol(matchingSymbol)
    setSymbolList(symbolList => [...symbolList, matchingSymbol])
  }

  // Handle user input on submit to fetch the symbol from the API (currently match symbol from dummy 'API')
  const handleSubmit = event => {
    event.preventDefault()
    findBySymbol(query)
    // setSymbolList(symbolList => [...symbolList, query.toUpperCase()])
    setQuery('')
  }

  // Source: https://www.robinwieruch.de/local-storage-react
  useEffect(() => {
    localStorage.setItem('symbolList', symbolList)
  }, [symbolList])


  return (
    <Container fluid className='App'>
      <Row>
        <Col>
          <NavbarCustom />
        </Col>
      </Row>
      <Row className='main'>
        <Col className='symbols-container' sm={4}>
          <SymbolContainer
            symbol={symbol}
            query={query}
            setQuery={setQuery}
            symbolList={symbolList}
            setSymbolList={setSymbolList}
            findBySymbol={findBySymbol}
            handleSubmit={handleSubmit}
          />
        </Col>
        <Col className='tweet-container' sm={8}>
          <TweetContainer symbol={symbol} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
