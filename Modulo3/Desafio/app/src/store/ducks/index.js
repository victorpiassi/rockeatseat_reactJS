import { combineReducers } from 'redux'
import developers from "./developers"
import modal from "./modal"
import theme from "./theme"

export default combineReducers({
    developers,
    modal,
    theme
})