import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/app'

//2
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

//20
// import { applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'

import multi from 'redux-multi'
import thunk from 'redux-thunk'

//3
//const store = createStore(reducers) 

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//21
//applyMiddleware retorna uma função, cujo parâmetro é o createStore e tem como resultado uma função cujo parâmetro é o reducers
//Middleware necessário para aguardar a resolução da promise
const store = applyMiddleware(multi, thunk, promiseMiddleware)(createStore)(reducers, devTools)

ReactDOM.render(
    //4
    <Provider store={store}>
        <App/> 
    </Provider>
, document.getElementById('app'))