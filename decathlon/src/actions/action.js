import { ADDTOCART, EMPTYCART, SAVECART, USERLOGIN, USERLOGOUT } from "./actionTypes"

export const userLogin = () => {
    return {
        type: USERLOGIN
    }
}

export const userLogout = () => {
    return {
        type: USERLOGOUT
    }
}

export const addToCart = (val) => {
    return {
        type: ADDTOCART,
        payload: val
    }
}

export const saveCart = (val) => {
    return {
        type: SAVECART,
        payload: val
    }
}

export const emptyCart = () => {
    return {
        type: EMPTYCART
    }
}