import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./homepage.styles.scss"
import {MenuItems} from '../../Components/index'

const HomePage = props => {
  console.log("called1111")
   const [categories,SetCategories]  = useState([
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl : "/hats"
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl : "/hats"
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl : "/hats"
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl : "/hats"
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl : "/hats"
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