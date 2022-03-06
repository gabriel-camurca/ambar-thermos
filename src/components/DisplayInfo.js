import React from 'react'

import { useSelector } from 'react-redux'

const DisplayInfo = () => {

  const place = useSelector(state => state.current)

  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  )
}

export default DisplayInfo;