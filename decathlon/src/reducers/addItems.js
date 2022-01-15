const addItems = (state = [], action) => {
    switch (action.type) {
        case 'ADDTOCART':
            let newState = state;
            if (!newState.length) {
                newState.push(action.payload)
            } else {
                if (newState.some(items => items.item === action.payload.item)) {
                    // Do nothing
                } else {
                    newState.push(action.payload)
                }
            }
            console.log(newState)
            return newState;
        default:
            return state;
    }
}

export default addItems;