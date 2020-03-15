import React, { Fragment, Component } from 'react'
import PropTypes from "prop-types"

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Creators as FavoriteActions } from "../../store/ducks/favorites"

class Main extends Component {
    static propTypes = {
        addFavoriteRequest: PropTypes.func.isRequired,
        favorites: PropTypes.shape({
            loading: PropTypes.bool,
            data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                description: PropTypes.string,
                url: PropTypes.string
            })),
            error: PropTypes.oneOfType(null, PropTypes.string)
        }).isRequired
    }

    state = {
        repositoryInput: ''
    }


    handleAddRepository = (event) => {
        event.preventDefault();
        this.props.addFavoriteRequest(this.state.repositoryInput);
        this.setState({ repositoryInput: "" })
    }

    render() {
        return (
            < Fragment >
                <form onSubmit={this.handleAddRepository}>
                    <input
                        placeholder="Usuário/Repositório"
                        value={this.state.repositoryInput}
                        onChange={event => this.setState({
                            repositoryInput: event.target.value
                        })}
                    />
                    <button type="submit">Adicionar</button>
                    {this.props.favorites.loading && <span> Carregando...</span>}
                    {!!this.props.favorites.error && <span style={{ color: "#DD4040" }}> {this.props.favorites.error}</span>}
                </form>
                <ul>
                    {this.props.favorites.data.map(favorite => (
                        <li key={favorite.id}>
                            <p>
                                <strong>{favorite.name}</strong>
                                ({favorite.description})
                            </p>
                            <a target="_blank" rel="noopener noreferrer" href={favorite.url}>Acessar</a>
                        </li>
                    ))}
                </ul>
            </Fragment >
        )
    }
}
const mapStateToProps = state => ({
    favorites: state.favorites,
    loading: state.loading,
    error: state.error
})

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);