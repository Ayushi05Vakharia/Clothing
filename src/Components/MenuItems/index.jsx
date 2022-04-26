import React from 'react'
import PropTypes from 'prop-types'

const index = props => {
  const {categories} = props
  return (
    <div className='directory-menu'>
    {categories?.map((category) => 
      <div className={`menu-item ${category.size}`} key={category.id} >
        <div
        className='background-image'
        style={{backgroundImage:`url(${category.imageUrl})`}}/>
        <div className='content'>
          <div className='title'>{category.title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      )
     
      
      }</div>
  )
}

index.propTypes = {}

export default index