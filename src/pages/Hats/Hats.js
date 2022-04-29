import React from 'react'
import PropTypes from 'prop-types'
import {WithRouter} from '../../CustomHooks/WithRouter'
import { Link } from 'react-router-dom'

const Hats = props => {
    const{HatsData} = props
    console.log("..................",HatsData)
  return (
    <div>
      {/* {HatsData?.map((hats) => 
      <React.Fragment>
      <Link to={`${hats.routeName}`}> {hats.title.toUpperCase()} </Link>
      </React.Fragment>
      ) } */}
      <h1>HATS DATA</h1>
      </div>
      
  )
}

Hats.propTypes = {}

export default WithRouter(Hats)