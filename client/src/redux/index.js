import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './userReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    user:userReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))