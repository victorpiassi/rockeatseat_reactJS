import React, { Component } from "react"

import "./style.css"

import PostHeader from "./PostHeader/index.js"

export default class Post extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="post">
                <PostHeader src={data.image_url}>
                    <span id="username">{data.username}</span>
                    <br />
                    <span id="time-ago">Há {data.time_ago} minutos</span>
                </PostHeader>
                <p>{data.text}</p>
            </div>
        )
    }
}