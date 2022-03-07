import React from 'react'

import { useSelector } from 'react-redux'

import InfoCard from './InfoCard';

const DisplayInfo = () => {

  const current = useSelector(state => state.current);

  return (
    <div style={{margin: "15%"}}>
      <InfoCard
        title={current.name}
        current={current.current}
        min={current.min}
        max={current.max}
        img={current.img}
      ></InfoCard>
    </div>
  )
}

export default DisplayInfo;