import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import { loginReducer } from './reducer/login'

const rootReducer = combineReducers({
    login:loginReducer,
})

const middleWare = [logger]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))