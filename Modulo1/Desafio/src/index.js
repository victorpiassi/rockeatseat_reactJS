import React, { Component, Fragment } from "react"

import { render } from "react-dom"

import "./style.css"

import Header from "./Header/index.js"
import Post from "./Post/index.js"

class App extends Component {
    state = {
        posts: [
            {
                id: 1,
                image_url: "https://assets.change.org/photos/0/kx/ah/hjkxAHxAKbytEHg-800x450-noPad.jpg?1560309500",
                username: "Keanu Reeves",
                time_ago: "30",
                text: "Eu me identifico com o espírito do perdedor, o cara que as pessoas dizem que não pode chegar lá mas é capaz disso apesar de tudo. É meio que uma redenção pessoal."
            },
            {
                id: 2,
                image_url: "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-facebook-1.jpg?quality=85",
                username: "Terry Crews",
                time_ago: "5",
                text: "Quer saber o que é mágica? Eu tenho dois empregos, trabalho sete dias por semana e todo dia meu dinheiro desaparece."
            },
            {
                id: 3,
                image_url: "https://abrilexame.files.wordpress.com/2019/04/bill.jpg",
                username: "Bill Gates",
                time_ago: "17",
                text: "Todo mundo tem cliente. Só traficante e analista de sistemas é que tem usuário."
            },
            {
                id: 4,
                image_url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-436664,resizemode-1,msid-72360263/joker-fame-joaquin-phoenix-a-vegan-since-3-named-petas-person-of-the-year.jpg",
                username: "Joaquin Phoenix",
                time_ago: "3",
                text: "Você pode se vingar do mal, sem se tornar parte dele?"
            }
        ]
    }

    render() {
        const { posts } = this.state;
        return (
            <div id="page-content">
                <Header />

                {posts.map(post => <Post key={post.id} data={post} />)}

            </div>
        )
    }
}

render(<App />, document.getElementById("app"))