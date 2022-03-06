import React from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';
import * as PlaceActions from '../actions/place.js';

import '../styles/Home.css'
import 'antd/dist/antd.css';

import InfoCard from './InfoCard';
import DisplayInfo from './DisplayInfo';

import { Col, Row } from 'antd';
import { Button } from 'antd/lib/radio';

const Home = (props) => {

  const places = useSelector(state => state.places)
  const current = useSelector(state => state.current)

  const dispatch = useDispatch();

  function formatUrl(lat, lon){
    return `current?lat=${lat}&lon=${lon}`
  }

  async function fetchCardInfo(details){
    const res = await axios.get(`https://fcc-weather-api.glitch.me/api/${details}`)
    return res.data
  }

  function fetchPlaceInfo(place){
    fetchCardInfo(formatUrl(place.latitude, place.longitude)).then(
      (response) => {
        console.log(response)
        const newPlace = {
          ...place,
          img: response?.weather[0].icon,
          current: response.main.temp,
          min: response.main.temp_min,
          max: response.main.temp_max
        }
        dispatch(PlaceActions.setNewPlace(newPlace))
      }
    )
  }

  return (
    <Row className='content-container'>
      <Col className="button-bar-container">
          {places.map(element => {
            return(
              <Button onClick={() => fetchPlaceInfo(element)} key={element.acronym}>{element.name}</Button>
            )
            })}
      </Col>
      <Col>
        <DisplayInfo/>
      </Col>
      <Col>
        <InfoCard
          title={current.name}
          current={current.current}
          min={current.min}
          max={current.max}
          img={current.img}
        ></InfoCard>
      </Col>
    </Row>
  )
}

export default Home