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

export const saveCart = (val) => {
    return {
        type: 'SAVECART',
        payload: val
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTYCART'
    }
}