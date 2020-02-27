// *** TYPES *** //

export const Types = {
    ADD_REQUEST: "devolopers/ADD_REQUEST",
    ADD_SUCCESS: "devolopers/ADD_SUCCESS",
    ADD_FAILURE: "devolopers/ADD_FAILURE",
    REMOVE_DEV: "developers/REMOVE_DEV"
}

// *** ACTIONS *** //


export const Creators = {
    addDeveloperRequest: (user, cord) => ({
        type: Types.ADD_REQUEST,
        payload: { user: user, cord: cord }
    }),
    addDeveloperSuccess: data => ({
        type: Types.ADD_SUCCESS,
        payload: { data }
    }),
    addDeveloperFailure: error => ({
        type: Types.ADD_FAILURE,
        payload: { error }
    }),
    removeDeveloper: id => ({
        type: Types.REMOVE_DEV,
        payload: { id }
    })
}

// *** REDUCER *** //

const INITIAL_STATE = {
    data: [],
    error: null
}


export default function developers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_REQUEST:
            return { ...state }
        case Types.ADD_SUCCESS:
            return { ...state, error: null, data: [...state.data, action.payload.data] }
        case Types.ADD_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        case Types.REMOVE_DEV:
            return { ...state, data: [...state.data.filter(user => user.id !== action.payload.id)] }
        default:
            return state;
    }
}