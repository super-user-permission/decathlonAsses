import { USERLOGIN, USERLOGOUT } from "../actions/actionTypes";

const userStatus = (state = 'GUEST', action) => {
    switch (action.type) {
        case USERLOGIN:
            return 'USER';
        case USERLOGOUT:
            return 'GUEST';
        default:
            return state;
    }
}

export default userStatus;