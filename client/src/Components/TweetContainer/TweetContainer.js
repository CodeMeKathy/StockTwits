import React from 'react'
import './TweetContainer.css'

// React Bootstrap Component Imports
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// Imported Components
import Tweet from '../Tweet/Tweet'

const TweetContainer = ({ symbol }) => {
  return (
    <Container fluid className='TweetContainer'>
      <Row>
        <Col>
          <div className='tweets'>
            {/* If a ticker symbol has at least one object key then render the corresponding tweets */}
            {typeof symbol === 'object' && Object.keys(symbol).length > 0 ? (
              <>
                <h3 className='tweet-div-title'>
                  {symbol.messages.length} '{symbol.symbol.title}' Tweets
                </h3>
                <ul className='tweets-ul'>
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
              </>
            ) : (
              <div>
                <h4 className='empty-title'>Tweet List Empty</h4>
                <h5 className='empty-sub'>Add ticker symbol to load tweets</h5>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TweetContainer
