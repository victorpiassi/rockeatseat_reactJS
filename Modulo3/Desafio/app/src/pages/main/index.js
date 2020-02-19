import React, { Component } from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
// TODO import { Creators as ACTION } from "../../tore/ducks/ACTION"

import Map from "../../components/Map/index"

class Main extends Component {
    render() {
        return (
            <Map />
        )
    }
}

export default Main
