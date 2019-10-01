import React from 'react'
import ReactDOM from 'react-dom'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './main/reducers'
import App from './main/app'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                 
const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer, devTools)
ReactDOM.render(
    <Provider store={store} >
        <App /> 
    </Provider>,
    document.getElementById('app'))
