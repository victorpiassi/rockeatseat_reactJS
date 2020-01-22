import React, { Component, Fragment } from "react"

import "./style.css"

export default class PostHeader extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="post-header">
                <img src={this.props.src} className="profile-photo" />
                <p>
                    <span id="username">{data.username}</span>
                    <br />
                    <span id="time-ago">Há {data.time_ago} minutos</span>
                </p>
            </div>
        )
    }
}