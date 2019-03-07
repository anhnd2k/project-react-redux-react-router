import * as types from './../constants/ActionType';
export const actAddToCard = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product, // prodct: product
        quantity // quantity: quantity
    }
}
export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY,
        product,
        quantity
    }
}