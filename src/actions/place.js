import * as types from "./types"

export function setNewPlace(place){
  return {
    type: types.SET_PLACE,
    place
  }
} 