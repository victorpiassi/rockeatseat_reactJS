import React, { Component } from "react"
import { Container } from "./styles"
import Item from "../Item"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as DevelopersActions } from "../../store/ducks/developers"

class List extends Component {
    render() {
        return (
            <Container onKeyDown={this.consoleProps} content={this.props.data}>
                {this.props.data.map(data => <Item data={data} key={data.id} />)}
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    data: state.developers.data
})

const mapDispatchToProps = dispatch => bindActionCreators(DevelopersActions, dispatch)
console.tron.log("PROPS", List.props)

export default connect(mapStateToProps, mapDispatchToProps)(List);