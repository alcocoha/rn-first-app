import { takeLatest, call } from 'redux-saga/effects';
import { ITINERARIES } from '../../constants/actionTypes';
import { getData, postData } from '../api';

export function* getLocations({ payload }){
    try {
        const data = yield call( getData, `autosuggest/v1.0/MX/USD/en-US/?query=${ payload }` );
        console.log('data-----:::::', data, data.Places)
        
    } catch (error) {
        
    }
}

export default function* itineraries(){
    yield takeLatest( ITINERARIES.GET_LOCATIONS_START, getLocations );
}