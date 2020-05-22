import React from 'react'
import './Tweet.css'

const Tweet = props => {
  const { message, id } = props
  return (
    <li key={id} className='tweet-body'>
      <div>{message}</div>
    </li>
  )
}

export default Tweet
