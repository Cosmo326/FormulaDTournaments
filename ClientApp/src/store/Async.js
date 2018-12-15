const ADD_ASYNC_COUNT = 'ADD_ASYNC_COUNT';
const REMOVE_ASYNC_COUNT = 'REMOVE_ASYNC_COUNT';
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const initialState = { AsyncCount: 0, Errors: []};

export const actionCreators = {
  addAsync: () => ({ type: ADD_ASYNC_COUNT }),
  removeAsync: () => ({ type: REMOVE_ASYNC_COUNT }),
  addError: (error) => ({ type: ADD_ERROR, error}),
  removeError: (index) => ({ type: REMOVE_ERROR, index})
};

export function AsyncPost(dispatch, url, body) {
  dispatch(actionCreators.addAsync());

  const formData = new FormData();
  for(let name in body) {
    formData.append(name, body[name]);
  }
  
  return fetch(url, {
    method: "POST",
    body: formData
  })
      .then(data => {
        dispatch(actionCreators.removeAsync());
        return data.json();
      })
      .catch(error => dispatch(actionCreators.addError(error)));
}

export function AsyncGet(dispatch, url){
  dispatch(actionCreators.addAsync());
  return fetch(url)
      .then(data => {
        dispatch(actionCreators.removeAsync());
        return data.json();
      })
      .catch(error => dispatch(actionCreators.addError(error)));
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_ASYNC_COUNT:
      return { AsyncCount: state.AsyncCount + 1, Errors: state.Errors };
    case REMOVE_ASYNC_COUNT:
      return { AsyncCount: state.AsyncCount - 1, Errors: state.Errors };
    case ADD_ERROR:
      return { AsyncCount: state.AsyncCount - 1, Errors: [...state.Errors, action.error]};
    case REMOVE_ERROR:
      return { AsyncCall: state.AsyncCount, Errors: [...state.Errors.splice(action.index, 1)]};
    default:
      return state;
  }
};