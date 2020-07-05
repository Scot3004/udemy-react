import React from 'react'
import './UserOutput.css'

export default ({username}) => (
  <div className="UserOutput">
    <p>Username:</p>
    <p>{username}</p>
  </div>
)