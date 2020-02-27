// *** TYPES *** //

export const Types = {
    SET_THEME: "theme/SET_THEME",
}

// *** ACTIONS *** //


export const Creators = {
    setTheme: theme => ({
        type: Types.SET_THEME,
        payload: { theme: theme }
    })
}

// *** REDUCER *** //

const INITIAL_STATE = {
    theme: "streets-v11"
}


export default function theme(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_THEME:
            return { ...state, theme: action.payload.theme }
        default:
            return state;
    }
}