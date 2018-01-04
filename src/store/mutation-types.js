// product types
export const RECEIVE_PRODUCTTYPES = 'RECEIVE_PRODUCTTYPES'
export const TOGGLE_PRODUCTTYPE_ACTIVE = 'TOGGLE_PRODUCTTYPE_ACTIVE'
export const TOGGLE_PRODUCTTYPE_SHOW = 'TOGGLE_PRODUCTTYPE_SHOW'
export const COMMIT_PRODUCTTYPES_CHANGE = 'COMMIT_PRODUCTTYPES_CHANGE'

// unit
export const ADD_NEW_UNIT = 'ADD_NEW_UNIT' // trigger ADD_NEW_MODULE
export const EDIT_UNIT = 'EDIT_UNIT_NAME'
export const DELETE_UNIT = 'DELETE_UNIT' // trigger DELETE_MODULE

// module
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const ACTIVE_MODULE = 'ACTIVE_MODULE' // trigger ACTIVE_PRODUCT all
export const CANCEL_MODULE = 'CANCEL_MODULE' // trigger CANCEL_PRODUCT all

export const ADD_NEW_MODULE = 'ADD_NEW_MODULE' // trigger ADD_NEW_PRODUCT ACTIVE_MODULE
export const EDIT_MODULE = 'EDIT_MODULE'
export const DELETE_MODULE = 'DELETE_MODULE '// trigger DELETE_PRODUCT all

// code product
export const ACTIVE_PRODUCT = 'ACTIVE_PRODUCT' // activate one product of a module, module is active.
export const CANCEL_PRODUCT = 'CANCEL_PRODUCT'

export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT' // trigger ADD_TO_CART
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT' // trigger REMOVE_FROM_CART

// cart
export const TOGGLE_TYPE_TO_CART = 'TOGGLE_TYPE_TO_CART' // trigger ACTIVE_PRODUCT
export const ADD_ALL_TO_CART = 'ADD_ALL_TO_CART' // trigger ACTIVE_MODULE
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST' // recover default
