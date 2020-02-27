import { call, put, select } from "redux-saga/effects"
import api from "../../services/api"
import { Creators as DeveloperActions } from "../ducks/developers"

export function* addDeveloper(action) {
    try {
        const { data } = yield call(api.get, `/users/${action.payload.user}`)

        const isDuplicated = yield select(state =>
            state.developers.data.find(developer => developer.id === data.id)
        )

        if (isDuplicated) {
            yield put(DeveloperActions.addDeveloperFailure("Desenvolvedor já foi adicionado."))
        }

        else {
            const developerData = {
                id: data.id,
                name: data.name,
                login: data.login,
                photo_url: data.avatar_url,
                profile_url: data.html_url,
                cord: action.payload.cord
            }
            yield put(DeveloperActions.addDeveloperSuccess(developerData))
        }
    }
    catch (err) {
        yield put(DeveloperActions.addDeveloperFailure("Erro ao adicionar repositório"))
    }
}