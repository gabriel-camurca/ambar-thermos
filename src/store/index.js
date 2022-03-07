import { createStore } from "redux";

import * as types from "../actions/types"

function createPlace(name, acronym, lat, lon){
  return (
    {
      name: name,
      acronym: acronym,
      loaded: false,
      img: "",
      latitude: lat,
      longitude: lon,
      current: 0,
      min: 0,
      max: 0
    }
  )
}

const INITIAL_STATE = {
  current: createPlace("", "", 0, 0),
  places: [
    createPlace("Rio de Janeiro", "rj", -22.908333, -43.196388),
    createPlace("São Paulo", "sp", -23.5489, -46.6388),
    createPlace("Fortaleza", "ft", -3.71839, -38.5434),
  ]
}

function reducer(state = INITIAL_STATE, action){
  if (action.type === types.SET_PLACE){
    return {
      ...state,
      current: action.place,
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;