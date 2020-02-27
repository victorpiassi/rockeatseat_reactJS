import React, { Component } from "react"
import { Container } from "./styles"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Creators as DevelopersActions } from "../../store/ducks/developers"
import { Creators as ModalActions } from "../../store/ducks/modal"


class Form extends Component {
    state = {
        userInput: ""
    }

    addUser = async event => {
        event.preventDefault()

        this.props.addDeveloperRequest(this.state.userInput, this.props.cord)

        this.props.removeModalView()

        console.tron.log("USER DATA:", this.props.data)
    }

    closeForm = event => {
        event.preventDefault()
        this.props.removeModalView()
    }

    render() {

        return (
            <Container>
                <form onSubmit={this.addUser}>
                    <span>Adicionar novo usuário</span>
                    <input autoFocus type="text" onChange={e => this.setState({ userInput: e.target.value })} />
                    <div id="buttons">
                        <button type="button" id="cancel" onClick={this.closeForm}>Cancelar</button>
                        <button type="submit" id="add">Adicionar</button>
                    </div>
                </form>
            </Container >
        )
    }
}


const mapStateToProps = state => ({
    openedForm: state.modal.openedForm,
    cord: state.modal.cord,
    data: state.developers.data,
    error: state.developers.error
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...DevelopersActions, ...ModalActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form);
