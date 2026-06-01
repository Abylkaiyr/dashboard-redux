import {ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER} from "./filter-actions";

export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER:
            if (state.includes(action.filter)) return state;
            return [...state, action.filter];
        case REMOVE_FILTER:
            return state.filter(f => f !== action.filter);
        case CLEAR_FILTERS:
            return [];
        default: return state;
    }
}