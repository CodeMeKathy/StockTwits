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

const App = () => {
  const [query, setQuery] = useState('')
  const [symbol, setSymbol] = useState({})
  const [symbolList, setSymbolList] = useState([])
  const [url, setUrl] = useState('')

  const fetchData = url => {
    fetch(url)
      .then(res => res.json())
      .then(json => setSymbol(json))
      .catch(err => console.error(err))
  }
  useEffect(() => {
    setSymbolList(symbolList => [...symbolList, symbol])
  }, [symbol])
  // Handle user input on submit to fetch the symbol from the API
  const handleSubmit = event => {
    event.preventDefault()
    if (query !== undefined && query.trim().length > 0) {
      setUrl(`http://kl-test-server.herokuapp.com/?q=${query}`)
      fetchData(`http://kl-test-server.herokuapp.com/?q=${query}`)
      setQuery('')
    }
  }
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
