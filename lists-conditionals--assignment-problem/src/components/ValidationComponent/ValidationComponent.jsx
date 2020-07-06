import React from 'react'

export default ({wordLength, minimumLength = 5}) => {
  let wordsMessage = null
  if (wordLength < minimumLength) {
    wordsMessage = <p>Text too short</p>
  } else {
    wordsMessage = <p>Text long enough</p>
  }
  return wordsMessage
}