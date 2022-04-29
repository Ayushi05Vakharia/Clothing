import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {shop_Data} from '../../Constants'
import Hats from '../Hats/Hats'
import Jackets from '../Jackets'
import Sneakers from '../Sneakers'
import Womens from '../Womens'
import Mens from '../Mens'
import { Link } from 'react-router-dom'

const ShopData = props => {
    const[collections,setCollections]=useState(shop_Data)
    
  return (
    <div>
        
<h1>Collections</h1>
{collections?.map((collectionsData) => 
{

 switch (collectionsData.title) {
        case 'Hats':
          return (
              <div>
              <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><b>{collectionsData.title}</b></Link>
          <Hats HatsData = {collections?.filter(e => e.title==="Hats")}/>
          </div>);
        case 'Jackets':
          return (
            <div>
              <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><b>{collectionsData.title}</b></Link>
              <Jackets JacketsData = {collections?.filter(e => e.title==="Jackets")} />
          </div>
          );
          case 'Sneakers':
            return (
              <div>
                <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><b>{collectionsData.title}</b></Link>
                <Sneakers SneakersData = {collections?.filter(e => e.title==="Sneakers")} />
            </div>
            );
            case 'Womens':
              return (
                <div>
                  <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><b>{collectionsData.title}</b></Link>
                  <Womens WomensData = {collections?.filter(e => e.title==="Womens")} />
              </div>
              );
              case 'Mens':
                return (
                  <div>
                    <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><b>{collectionsData.title}</b></Link>
                    <Mens MensData = {collections?.filter(e => e.title==="Mens")} />
                </div>
                );
      
      }
}
)}

    </div>
  )
}

ShopData.propTypes = {}

export default ShopData