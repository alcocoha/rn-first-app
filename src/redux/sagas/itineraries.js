import { takeLatest, call, put } from 'redux-saga/effects';
import { ITINERARIES } from '../../constants/actionTypes';
import { getData, postData } from '../api';

export function* getLocations({ payload }){
    try {
        const results = yield call( getData, `autosuggest/v1.0/MX/USD/en-US/?query=${ payload }` );
        // console.log('data-----:::::', results, results.Places)

        yield put( { type: ITINERARIES.GET_LOCATIONS_SUCCESS, payload: results.Places });
        
    } catch (error) {
        yield put( { type: ITINERARIES.GET_LOCATIONS_ERROR, error } )
    }
}

export default function* itineraries(){
    yield takeLatest( ITINERARIES.GET_LOCATIONS_START, getLocations );
}