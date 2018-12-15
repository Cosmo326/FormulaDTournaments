
import {AsyncGet, AsyncPost} from "./Async";

const SET_RACE = 'GET_RACE';
const CLEAR_RACE = 'CLEAR_RACE';
export const initialState = { 
  id:'00000000-0000-0000-0000-000000000000',
  track: '', 
  raceDate: null,
  endDate: null,
  laps: 0, 
  standings: [],
};

export const actionCreators = {
  setRaceAction: Race => ({type: SET_RACE, Race}),
  clearRaceAction: () => ({type: CLEAR_RACE})
};


export function GetRace(event, data){
  return dispatch => {
    return AsyncGet(dispatch, `api/Race/GetById/?id=${data.id}`)
        .then(data => dispatch(actionCreators.setRaceAction(data)))
  }
}

export function AddRace(event, data){
  return dispatch => {
    return AsyncPost(dispatch, `api/Race/SaveRace/`, {tournamentId: data.Race.tournamentId, track: data.Race.track, laps: data.Race.laps})
        .then(data => dispatch(actionCreators.setRaceAction(data)))
  }
}

export function ClearRace(event, data){
  return dispatch => {
    return dispatch(actionCreators.clearRaceAction())
  }
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_RACE:
      return {
        id: action.Race.id,
        track: action.Race.track,
        raceDate: action.Race.raceDate,
        endDate: action.Race.endDate,
        laps: action.Race.laps,
        standings: action.Race.standings
      };
    case CLEAR_RACE:
      return initialState;
    default:
      return state;
  }
};