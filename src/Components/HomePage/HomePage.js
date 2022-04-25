import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./homepage.styles.scss"

const HomePage = props => {
   const [categories,SetCategories]  = useState({})
     return (
      <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>HATS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>JACKETS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>SHOES</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>WOMENS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <div className='title'>MENS</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
    )
}

HomePage.propTypes = {}

export default HomePage