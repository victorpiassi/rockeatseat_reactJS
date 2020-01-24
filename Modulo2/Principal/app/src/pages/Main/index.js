import React, { Component } from "react";
import logo from '../../assets/logo.png'
import { Container, Form } from './styles'
import CompareList from '../../components/CompareList'
import api from "../../services/api"
import moment from 'moment'


export default class Main extends Component {
    state = {
        loading: false,
        repositoryInput: "",
        repositories: [],
        repositoryError: false
    }

    handleAddRepository = async (event) => {
        this.setState({ loading: true })

        event.preventDefault()
        const endpoint = this.state.repositoryInput
        await api.get(`/repos/${endpoint}`)

            .then(({ data: repository }) => {
                repository.last_commit = moment(repository.pushed_at).fromNow()

                this.setState({
                    repositoryInput: "",
                    repositories: [...this.state.repositories, repository],
                    repositoryError: false
                })

            })
            .catch(response => {
                this.setState({
                    repositoryError: true
                })
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    render() {
        return (
            <Container>
                <img src={logo} alt="GitHub Compare" />
                <Form onSubmit={this.handleAddRepository} withError={this.state.repositoryError}>
                    <input type="text" placeholder="Usuário/Repositório" value={this.state.repositoryInput}
                        onChange={event => {
                            this.setState({
                                repositoryInput: event.target.value
                            })
                        }}
                    />
                    <button type="submit">{this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : "OK"}</button>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container >
        )
    }
}
