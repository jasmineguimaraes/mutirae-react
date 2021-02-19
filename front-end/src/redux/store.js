import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { loginReducer } from './reducer/login'
import { userReducer } from './reducer/user'

const rootReducer = combineReducers({
    login:loginReducer,
    user:userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWare = [logger]

//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))

export let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleWare)))
export let persistor = persistStore(store)
