import { createStore, compose, applyMiddleware } from 'redux'

import reducers from './ducks'
import sagas from "./sagas"

import createSagaMiddleware from "redux-saga"

import "../config/ReactotronConfig"

const sagaMonitor = process.env.NODE_ENV === "development" ? console.tron.createSagaMonitor() : null
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const middlewares = [sagaMiddleware]

const composer = process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
    )
    : applyMiddleware(...middlewares)

const store = createStore(reducers, composer)

sagaMiddleware.run(sagas)

export default store