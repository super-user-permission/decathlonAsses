export const userLogin = () => {
    return {
        type: 'LOGIN'
    }
}

export const userLogout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const addToCart = (val) => {
    return {
        type: 'ADDTOCART',
        payload: val
    }
}