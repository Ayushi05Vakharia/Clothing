import React, { useState } from 'react'
import {shop_Data} from '../../Constants'
import Hats from '../Hats/Hats'
import Jackets from '../Jackets'
import Sneakers from '../Sneakers'
import Womens from '../Womens'
import Mens from '../Mens'
import { Link } from 'react-router-dom'
import '../../css/collection-items.sytles.scss'

const ShopData = props => {
    const[collections,setCollections]=useState(shop_Data)
    
  return (
    <div className='p-4'>
        
<h1>Collections</h1>
{collections?.map((collectionsData) => 
{

 switch (collectionsData.title) {
        case 'Hats':
          return (
              <div key={collectionsData.id} className="collection-preview">
              <div to={`${collectionsData.routeName}`} className="title">{collectionsData.title}</div>
          <Hats HatsData = {collections?.filter(e => e.title==="Hats")}/>
          </div>);
        case 'Jackets':
          return (
            <div key={collectionsData.id}>
              <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><h2>{collectionsData.title}</h2></Link>
              <Jackets JacketsData = {collections?.filter(e => e.title==="Jackets")} />
          </div>
          );
          case 'Sneakers':
            return (
              <div key={collectionsData.id}>
                <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><h2>{collectionsData.title}</h2></Link>
                <Sneakers SneakersData = {collections?.filter(e => e.title==="Sneakers")} />
            </div>
            );
            case 'Womens':
              return (
                <div key={collectionsData.id}>
                  <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><h2>{collectionsData.title}</h2></Link>
                  <Womens WomensData = {collections?.filter(e => e.title==="Womens")} />
              </div>
              );
              case 'Mens':
                return (
                  <div key={collectionsData.id}>
                    <Link to={`${collectionsData.routeName}`} className="text-decoration-none text-body"><h2>{collectionsData.title}</h2></Link>
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