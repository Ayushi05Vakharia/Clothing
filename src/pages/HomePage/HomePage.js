import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./homepage.styles.scss"
import {MenuItems} from '../../Components/index'
import {allCategories} from '../../Constants'
const HomePage = props => {
 
   const [categories,SetCategories]  = useState(allCategories)
     return (
      <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      
       <MenuItems categories={categories}/>
       
    
    </div>
    )
}

HomePage.propTypes = {}

export default HomePage