import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({ //concatena os reducers
    
    todo: todoReducer
    
})  

export default rootReducer