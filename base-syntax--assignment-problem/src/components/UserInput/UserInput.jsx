import React from 'react'

const styles = {
  borderRadius: 10,
  borderColor: '#048090'
}

export default ({username, userNameChanged}) => (
  <div>
    <input value={username} onChange={userNameChanged} style={styles}></input>
  </div>
)