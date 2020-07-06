import React from 'react'

const styles = {
  display: 'inline-block', 
  padding: '16px', 
  textAlign: 'center',
  margin: '16px', 
  border: '1px solid black'
}

export default ({letter, onClick}) => {
  return <div style={styles} onClick={onClick}>{letter}</div>
}