import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'


import {applyMiddleware,createStore} from 'redux' // aplica os middlewares baixados
import {Provider} from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi' //permite duas ações num action
import thunk from 'redux-thunk'

import reducers from './main/reducers' //serve para poder chamas dois actions em uma ação apenas, tipo: add e search

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // faz a conexão com o redux dev tools do Chrome

const store = applyMiddleware(thunk,multi,promise)(createStore)(reducers, devTools) //aplica os middlewares antes de chegar nos reducers

ReactDOM.render(

                
                <Provider store={store}>
                <App/>
                </Provider>
                
                ,document.getElementById('app')
)