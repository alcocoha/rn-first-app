import { ITINERARIES } from '../../constants/actionTypes';

export default ( state = {}, action ) => {
    switch (action.type) {
        case ITINERARIES.GET_LOCATIONS_START:
            return {};
        case ITINERARIES.GET_LOCATIONS_SUCCESS:
            return {};
        case ITINERARIES.GET_LOCATIONS_ERROR:
            return {};
        default:
            return state;
    }
}
