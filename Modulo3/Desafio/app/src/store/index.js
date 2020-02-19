import { createStore, compose, applyMiddleware } from 'redux'

import reducers from './ducks'
import sagas from "./sagas"

import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers)

sagaMiddleware.run(sagas)

export default store