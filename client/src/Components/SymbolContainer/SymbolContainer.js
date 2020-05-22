import React from 'react'
import './SymbolContainer.css'

// React Bootstrap Component Imports
import Row from 'react-bootstrap/Row'

// Imported Components
import Symbol from '../Symbol/Symbol'

const SymbolContainer = ({
  symbol,
  symbolList,
  setSymbolList,
  handleSubmit,
  query,
  setQuery
}) => {
  return (
    <div>
      <Row className='sym-row'>
        <div className='form-group col-md-6'>
          <form onSubmit={handleSubmit}>
            <label>Enter Ticker Symbol</label>
            <input
              name='symbols'
              type='text'
              className='form-control'
              placeholder='GOOG, AAPL, SPOT'
              value={query}
              onChange={event => setQuery(event.target.value)} // Store user input in state (via query)
            />
            <button type='submit' className='btn'>
              Get Tweet
            </button>
          </form>
        </div>
      </Row>
      <Row className='symList-row'>
        <Symbol
          symbol={symbol}
          key={symbol.id}
          id={symbol.id}
          symbolList={symbolList}
          setSymbolList={setSymbolList}
        />
      </Row>
    </div>
  )
}

export default SymbolContainer
