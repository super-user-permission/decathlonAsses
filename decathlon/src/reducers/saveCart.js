import { SAVECART } from "../actions/actionTypes";

const addToSavedItems = (state = [], action) => {
    switch (action.type) {
        case SAVECART:
            return [...state, action.payload];
        default:
            return state
    }
}

export default addToSavedItems