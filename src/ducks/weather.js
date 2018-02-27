import { buildURL, formatWeatherData } from '../utils/weatherUtils';
import Axios from 'axios';

const initialState = {
  error: false,
  loading: false,
  search: true,
  weather: {}
};

const RESET = "RESET";
const SET_WEATHER = "SET_WEATHER";

export default function weather( state = initialState, action ) {
  switch ( action.type ) {
    case RESET: return initialState;
    default: return state;
  }
}

export function reset() {
  return { type: RESET };
}

export function setWeather(location) {
    const url = buildURL( location );
    const promise = axios.get( url ).then( res => formatWeatherData( res.data ) );
    return {
        type: SET_WEATHER,
        payload: promise
    }
}
