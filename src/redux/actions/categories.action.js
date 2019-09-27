import axios from 'axios'
import { CATEGORIES } from './__types'

export default () => async dispatch => {
    try {
        const response = await axios.get('https://turing-ecommerce-challenge.herokuapp.com/api/categories')
        dispatch({
            type: CATEGORIES,
            payload: response.data.list,
            status: response.data.status
        })
    } catch (error) {
        return {
            error: error.message
        }
    }
}