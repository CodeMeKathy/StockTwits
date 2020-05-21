import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

class NavbarCustom extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand href='#home'>
          <img
            alt='logo'
            loading='lazy'
            src='https://github.com/CodeMeKathy/StockTwits/blob/master/src/assets/CMK-Logo.png?raw=true'
            className='d-inline-block align-top'
            style={{ width: 30, height: 30, marginRight: '1rem' }}
          />
          StockTwits Dashboard
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default NavbarCustom
