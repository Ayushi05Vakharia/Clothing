import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'
import {WithRouter} from '../../CustomHooks/WithRouter'

const MenuItems = (props) => {
  const {categories,router} = props
  const [state,setstate]=React.useState()
  const navigate = useNavigate()
  console.log("router",router,categories)
  return (
    <div className='directory-menu'>
    {categories?.map((category) => 
      <div className={`menu-item ${category.size}`} key={category.id} >
        <div
        className='background-image'
        style={{backgroundImage:`url(${category.imageUrl})`}}/>
        <div className='content'onClick={() => {
          console.log("clicked",navigate)
          navigate(`${category.linkUrl}`)}} >
          <div className='title'>{category.title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      )
     
      
      }</div>
  )
}

MenuItems.propTypes = {}

export default WithRouter(MenuItems)