import React, { Component } from "react"

import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as PlaylistActions } from "../../store/ducks/playlists"

import { Container, NewPlaylist, Nav } from "./styles"

import AddPlaylistIcon from "../../assets/images/add_playlist.svg"

import Loading from "../Loading"

class Sidebar extends Component {
    static propTypes = {
        getPlaylistsRequest: PropTypes.func.isRequired,
        playlists: PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string
            })),
            loading: PropTypes.bool,
        }).isRequired
    }
    componentDidMount() {
        this.props.getPlaylistsRequest()
    }
    render() {
        return (
            <Container>
                <div>
                    <Nav>
                        <li>
                            <Link to="/">Navegar</Link>
                        </li>
                        <li>
                            <a href="">Rádio</a>
                        </li>
                    </Nav>

                    <Nav>
                        <li>
                            <span>SUA BIBLIOTECA</span>
                        </li>
                        <li>
                            <a href="">Feito para você</a>
                        </li>
                        <li>
                            <a href="">Tocados recentemente</a>
                        </li>
                        <li>
                            <a href="">Músicas Curtidas</a>
                        </li>
                        <li>
                            <a href="">Álbuns</a>
                        </li>
                        <li>
                            <a href="">Artistas</a>
                        </li>
                        <li>
                            <a href="">Podcasts</a>
                        </li>
                    </Nav>

                    <Nav playlist>
                        <li>
                            <span>PLAYLISTS</span>
                            {this.props.playlists.loading && <Loading />}
                        </li>
                        {this.props.playlists.data.map(playlist => (
                            <li key={playlist.id}>
                                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
                            </li>
                        ))}
                    </Nav>
                </div>
                <NewPlaylist>
                    <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
                    Nova playlist
        </NewPlaylist>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    playlists: state.playlists
})

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)