import React, { Component } from "react"

import { connect } from "react-redux"

import { bindActionCreators } from "redux"
import { Creators as ThemeActions } from "../../store/ducks/theme"

import { Select } from "./styles"

class ThemeChoice extends Component {
    render() {
        return (
            <Select onClick={(event) => this.props.setTheme(event.target.value)}>
                <option value="streets-v11">Streets</option>
                <option value="light-v10">Light</option>
                <option value="dark-v10">Dark</option>
                <option value="outdoors-v11">Outdoors</option>
                <option value="satellite-v9">Satellite</option>
            </Select>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators(
    ThemeActions,
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChoice);
