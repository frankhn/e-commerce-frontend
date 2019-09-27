import { GET_ALL_PRODUCT} from '../actions/__types'
const initialState = {}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: payload
            }
            default:
                return state
    }
}