import React from 'react'
import './SymbolContainer.css'

// React Bootstrap Component Imports
import Row from 'react-bootstrap/Row'

// Imported Components
import Symbol from '../Symbol/Symbol'

const SymbolContainer = ({ symbolList, handleSubmit, query, setQuery }) => {
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
              onChange={event => setQuery(event.target.value)} // Store user input in state
            />
            <button type='submit' className='btn'>
              Get Tweet
            </button>
          </form>
        </div>
      </Row>
      <Row className='symList-row'>
        {symbolList.length > 0
          ? symbolList.map(symbol => {
              console.log('symbol from SymbolContainer', symbol)
              return <Symbol key={symbol.id} symbol={symbol} />
            })
          : null}
      </Row>
    </div>
  )
}

export default SymbolContainer
