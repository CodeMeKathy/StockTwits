import React from 'react'
import './Symbol.css'

// React Bootstrap Component Imports
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Symbol = ({ symbol, removeSymbol }) => (
  <Col className='symList-container'>
    {typeof symbol === 'object' && Object.keys(symbol).length > 0 ? (
      <div className='symbol-div'>
        <Row>
          <Col sm={10}>
            <h5 className='sym-ticker'>${symbol.symbol.symbol}</h5>
            <h6 className='sym-title'>{symbol.symbol.title}</h6>
          </Col>
          <Col sm={2}>
            <button
              type='submit'
              className='del-btn delete-x'
              onClick={() => removeSymbol(symbol.symbol.title)}
            >
              x
            </button>
          </Col>
        </Row>
      </div>
    ) : null}
  </Col>
)

export default Symbol
