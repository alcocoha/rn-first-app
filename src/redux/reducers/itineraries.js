import { ITINERARIES } from '../../constants/actionTypes';

export default ( state = {}, action ) => {

    console.log('action', action)
    switch (action.type) {
        case ITINERARIES.GET_LOCATIONS_START:
            return { ...state };
        case ITINERARIES.GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                places: action.payload
            };
        case ITINERARIES.GET_LOCATIONS_ERROR:
            return {
                ...state,
                places: null,
                error
            };
        default:
            return state;
    }
}
