import React, { Component } from "react"
// import PropTypes from "prop-types"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

// import { ToastContainer, toast } from "react-toastify"
import { Creators as ModalActions } from "../../store/ducks/modal"

import Map from "../../components/Map"
import List from "../../components/List"
import Form from "../../components/Form"
import Overlay from "../../components/Overlay"
import ThemeChoice from "../../components/ThemeChoice"

import { Container } from "./styles"

class Main extends Component {

    render() {
        return (
            <Container>
                <List />
                {/* <ToastContainer /> */}
                <Map />
                {this.props.openedForm ? <Overlay><Form /></Overlay> : null}
                <ThemeChoice />
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    openedForm: state.modal.openedForm
})

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);
