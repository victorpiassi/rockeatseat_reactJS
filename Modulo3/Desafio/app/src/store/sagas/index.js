import { all, takeLatest } from "redux-saga/effects"

import { addDeveloper } from "./developers"

import { Types as DeveloperTypes } from "../ducks/developers"

export default function* rootSaga() {
    yield all([
        takeLatest(DeveloperTypes.ADD_REQUEST, addDeveloper)
    ])
}