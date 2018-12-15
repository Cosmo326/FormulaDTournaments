import { AsyncGet, AsyncPost } from './Async';

const SET_TOURNAMENT = 'GET_TOURNAMENT';
const UPDATE_TOURNAMENT = 'UPDATE_TOURNAMENT';
const CLEAR_TOURNAMENT = 'CLEAR_TOURNAMENT';
export const initialState = { 
  id:'00000000-0000-0000-0000-000000000000', 
  name: "", 
  startDate: null, 
  completeDate: null, 
  raceCount: 0, 
  standings: [], 
  races: [] 
};

export const actionCreators = {
  setTournamentAction: Tournament => ({ type: SET_TOURNAMENT, Tournament }),
  clearTournamentAction: () => ({type: CLEAR_TOURNAMENT})
};

export function GetTournament(event, data){
  return dispatch => {
    return AsyncGet(dispatch, `/api/Tournament/GetById/?id=${data.id}`)
      .then(data => { 
        dispatch(actionCreators.setTournamentAction(data));
      });
  };
}

export function SaveTournament(event, data){
  return dispatch => {
    return AsyncPost(dispatch, '/api/Tournament/SaveTournament', {name: data.Tournament.name, raceCount: data.Tournament.raceCount})
        .then(data => dispatch(actionCreators.setTournamentAction(data)));
  };
}

export function ClearTournament(){
  return dispatch => {
    return dispatch(actionCreators.clearTournamentAction());
  };
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case SET_TOURNAMENT:
      return {
        id: action.Tournament.id, 
        name: action.Tournament.name, 
        startDate: action.Tournament.startDate, 
        completeDate: action.Tournament.completeDate, 
        raceCount: action.Tournament.raceCount, 
        standings: action.Tournament.standings, 
        races: action.Tournament.races
      };
    case UPDATE_TOURNAMENT:
      const tournament = {...state};
      tournament.id = action.id;
      return tournament;
    case CLEAR_TOURNAMENT:
      return initialState;
    default:
      return state;
  }
};
