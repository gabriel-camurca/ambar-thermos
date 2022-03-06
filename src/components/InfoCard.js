import React from 'react'

import "../styles/Card.css"

import { Card, Divider, Image } from 'antd'

export default function InfoCard(props) {
  function section(header, number){
    return (<div className="center-container">
              <Image
                src={props?.img}
              />
              <h2>{header}</h2>
              <p>{number}</p>
            </div>)
  }
  return (
    <Card title={props?.title ?? "Local"} className="center-container">
      
      {section("Current Temperature", props?.current)}

      <Divider/>

      {section("Max. Temperature", props?.max)}
      {section("Min Temperature", props?.min)}
      
    </Card>
  )
}
