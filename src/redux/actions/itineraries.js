import { ITINERARIES } from '../../constants/actionTypes';

export const getLocations = payload => ({
    type: ITINERARIES.GET_LOCATIONS_START,
    payload
});