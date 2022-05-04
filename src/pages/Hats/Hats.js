import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {WithRouter} from '../../CustomHooks/WithRouter'
import {isEmpty} from 'lodash'
import '../../css/collection-items.sytles.scss'
const Hats = props => {
    const{HatsData} = props
    const [finalHatsData, setFinalHatsData] = useState([])
    useEffect(() => {
     if(!isEmpty(HatsData)){
const filteredHatsData = HatsData.flatMap(e => e.items.filter(e => e.id <= 4 ))
setFinalHatsData(filteredHatsData)
     }
    }, [HatsData])
    
  return (

<div className='preview '>
{finalHatsData?.map((hat) => (
<div className='collection-item'>
  <div
  className='image'
  style={{backgroundImage:`url(${hat.imageUrl})`}}
  />
 
  <div className='collection-footer'>
    <span>{hat.name}</span>
    <span>${hat.price}</span>
  </div>
</div>
))}

</div> 
  )
}

Hats.propTypes = {
  HatsData:PropTypes.array.isRequired
}

export default WithRouter(Hats)