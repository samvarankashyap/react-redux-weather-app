import { FETCH_WEATHER } from '../actions/index'
export default function(state = null, action){
  console.log('Action recieved ',action);
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]);
      // return [action.payload.data, ...state ];
  }
  return state;
}
