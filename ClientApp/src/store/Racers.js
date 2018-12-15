
import {AsyncGet, AsyncPost} from "./Async";

const CLEAR_RACERS = 'CLEAR_RACERS';
const GET_TOURNAMENT_RACERS = 'GET_TOURNAMENT_RACERS';
const ADD_RACER = 'ADD_RACER';
export const initialState = {
  racers: [],
};

export const actionCreators = {
  clearRacersAction: () => ({type: CLEAR_RACERS}),
  GetTournamentRacersAction: (Racers) => ({type: GET_TOURNAMENT_RACERS, Racers}),
  AddRacerAction: (Racer) => ({type:ADD_RACER, Racer}) 
};


export function ClearRacers(event, data){
  return dispatch => {
    return dispatch(actionCreators.clearRacersAction());
  };
}

export function GetTournamentRacers(event, data){
  return dispatch => {
    return AsyncGet(dispatch, `/api/Racer/GetByTournamentId/?id=${data.tournamentId}`)
        .then(data => dispatch(actionCreators.GetTournamentRacersAction(data.Racers)));
  };
}

export function AddRacer(event, data){
  return dispatch => {
    return AsyncPost(dispatch, '/api/Racer/AddRacer', data.Racer)
        .then(data => dispatch(actionCreators.AddRacerAction(data.Racer)));
  };
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case CLEAR_RACERS:
      return initialState;
    case GET_TOURNAMENT_RACERS:
      return action.Racers;
    case ADD_RACER:
      return [...state, action.Racer];
    default:
      return state;
  }
};