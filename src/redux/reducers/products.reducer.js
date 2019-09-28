import { GET_ALL_PRODUCT, SEARCH_PRODUCTS} from '../actions/__types'
const initialState = {}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: payload
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                products: payload
            }
            default:
                return state
    }
}