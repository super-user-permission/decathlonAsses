const userStatus = (state = 'GUEST', action) => {
    switch (action.type) {
        case 'LOGIN':
            return 'USER';
        case 'LOGOUT':
            return 'GUEST';
        default:
            return state;
    }
}

export default userStatus;