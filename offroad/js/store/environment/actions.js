import moment from 'moment';
import 'moment/locale/ja'
moment.locale('ja');

import { ENV, DARKSKY_API_KEY } from '../../config';

export const ACTION_UPDATE_DATE = 'ACTION_UPDATE_DATE';
export const ACTION_UPDATE_LOCATION = 'ACTION_UPDATE_LOCATION';

export function updateDate() {
  return function(dispatch) {
    dispatch({
      type: ACTION_UPDATE_DATE,
      date: moment().format('YYYY[年] MMMM Do, dddd')
    });
  }
}

export function updateLocation(location) {
  return function (dispatch) {
    const { name, lat, lng } = location;
    dispatch({ type: ACTION_UPDATE_LOCATION, location: {
      city: name,
      latitude: lat,
      longitude: lng
    }});
  }
}
