import { FETCH_RAINFALL_DATA } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RAINFALL_DATA:
      const [dataObj] = action.payload.data;
      return Object.assign({}, state, dataObj);
    default:
      return state;
  }
}
