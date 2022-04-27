import React from 'react'
import PropTypes from 'prop-types'
import {WithRouter} from '../../CustomHooks/WithRouter'

const Hats = props => {
    console.log("yeyyyyyyyyyyyyyyyyy")
  return (
    <div>
       <h1> Hats</h1></div>
  )
}

Hats.propTypes = {}

export default WithRouter(Hats)