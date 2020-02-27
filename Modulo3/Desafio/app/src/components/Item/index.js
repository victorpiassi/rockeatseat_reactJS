import React, { Component } from "react"
import { Container } from "./styles"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as DeveloperActions } from "../../store/ducks/developers"

class Item extends Component {
    handleRemoveProfile = () => {
        this.props.removeDeveloper(this.props.data.id)
    }
    render() {
        return (
            <Container>
                <img alt="" src={this.props.data.photo_url}></img>
                <div>
                    <span id="name">{this.props.data.name}</span>
                    <span id="login">{this.props.data.login}</span>
                </div>
                <img alt="" id="remove" onClick={this.handleRemoveProfile} src="https://image.flaticon.com/icons/svg/753/753345.svg" />
                <a href={this.props.data.profile_url} target="_blank"><img alt="" id="access" src="https://image.flaticon.com/icons/svg/709/709586.svg" /></a>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators(
    DeveloperActions,
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Item);