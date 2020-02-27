// *** TYPES *** //

export const Types = {
    ADD_VIEW: "modal/ADD_VIEW",
    REMOVE_VIEW: "modal/REMOVE_VIEW",
}

// *** ACTIONS *** //


export const Creators = {
    addModalView: (cord) => ({
        type: Types.ADD_VIEW,
        payload: { openedForm: true, cord: cord }
    }),
    removeModalView: () => ({
        type: Types.REMOVE_VIEW,
        payload: { openedForm: false, cord: {} }
    })
}

// *** REDUCER *** //

const INITIAL_STATE = {
    openedForm: null,
    cord: {}
}


export default function developers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_VIEW:
            return { ...state, openedForm: action.payload.openedForm, cord: action.payload.cord }
        case Types.REMOVE_VIEW:
            return { ...state, openedForm: action.payload.openedForm, cord: {} }
        default:
            return state;
    }
}