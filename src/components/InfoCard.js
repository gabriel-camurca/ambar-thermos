import React from 'react'

import "../styles/Card.css"

import { Card, Divider, Image } from 'antd'

export default function InfoCard(props) {
  function section(header, number){
    return (<div className="center-container">
              <Image
                src={props?.img ?? "img_not_found.png"}
                fallback="img_not_found.png"
              />
              <h2>{header}</h2>
              <p>{number}</p>
            </div>)
  }
  return (
    <Card title={props?.title !== "" ? props?.title : "Choose a city"}
          className="info-content-container">
      
      {section("Current Temperature", props?.current)}

      <Divider/>

      <div className='more-temp-info'>
      {section("Min Temperature", props?.min)}
      {section("Max. Temperature", props?.max)}
      </div>
      
    </Card>
  )
}
