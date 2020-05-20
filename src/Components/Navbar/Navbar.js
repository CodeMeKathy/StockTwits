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
            src=''
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
          StockTwits Dashboard
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default NavbarCustom
