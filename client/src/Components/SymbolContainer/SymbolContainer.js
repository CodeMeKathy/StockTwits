import React from 'react'
import './SymbolContainer.css'

// React Bootstrap Component Imports
import Row from 'react-bootstrap/Row'

// Imported Components
import Symbol from '../Symbol/Symbol'

const SymbolContainer = ({
  symbolList,
  setSymbolList,
  handleSubmit,
  query,
  setQuery
}) => {
  const removeSymbol = title => {
    // https://dev.to/sanderdebr/creating-a-crud-app-in-react-with-hooks-3jml
    setSymbolList(symbolList.filter(company => company.symbol.title !== title))
  }

  return (
    <div>
      <Row className='sym-row'>
        <div className='form-group col-md-6'>
          <form onSubmit={handleSubmit}>
            <label className='sym-label'>Enter Ticker Symbol</label>
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
              return (
                <Symbol
                  key={symbol.id}
                  symbol={symbol}
                  symbolList={symbolList}
                  removeSymbol={removeSymbol}
                />
              )
            })
          : null}
      </Row>
    </div>
  )
}

export default SymbolContainer
