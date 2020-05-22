import React, { Component } from 'react'
import './Navbar.css'

// Imported Components
import Navbar from 'react-bootstrap/Navbar'

class NavbarCustom extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand href='#home'>
          <img
            alt='logo'
            loading='lazy'
            src='https://github.com/CodeMeKathy/StockTwits/blob/Feature-proxySetup/client/src/assets/Asset%203.png?raw=true'
            className='d-inline-block align-top'
            style={{ width: 30, height: 30, marginRight: '1rem' }}
          />
          <span className='navbar-brand-title'>StockTwits Dashboard</span>
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default NavbarCustom
