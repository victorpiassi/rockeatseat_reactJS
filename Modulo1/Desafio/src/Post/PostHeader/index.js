import React, { Component, Fragment } from "react"

import "./style.css"

export default class PostHeader extends Component {
    render() {
        return (
            <div className="post-header">
                <img src={this.props.src} className="profile-photo" />
                <p>
                    {this.props.children}
                </p>
            </div>
        )
    }
}