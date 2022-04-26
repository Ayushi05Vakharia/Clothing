import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./homepage.styles.scss"
import {MenuItems} from '../../Components/index'

const HomePage = props => {
   const [categories,SetCategories]  = useState([
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      
    }
   ])
     return (
      <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      
       <MenuItems categories={categories}/>
       
    
    </div>
    )
}

HomePage.propTypes = {}

export default HomePage