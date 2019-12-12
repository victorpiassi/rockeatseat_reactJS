import React, { Component } from "react"

import "./style.css"

import PostHeader from "./PostHeader/index.js"

export default class Post extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="post">
                <PostHeader src={data.image_url}>
                    {data.username}
                    <br />
                    Há {data.time_ago} minutos
                </PostHeader>
                {this.props.children}
                <p>{this.props.text}</p>
            </div>
        )
    }
}