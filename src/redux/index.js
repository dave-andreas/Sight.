import {combineReducers} from 'redux'
import reducer from './reducer'
import authreducer from './authreducer'

export default combineReducers ({
    reducer,
    authreducer
})