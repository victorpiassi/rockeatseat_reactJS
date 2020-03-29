import React, { Component } from "react"

import PropTypes from "prop-types"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as PlaylistActions } from "../../store/ducks/playlists"

import { Container, Title, Playlist, List } from "./styles"

import Loading from "../../components/Loading"

class Browse extends Component {
    componentDidMount() {
        this.props.getPlaylistsRequest()
    }

    static propTypes = {
        getPlaylistsRequest: PropTypes.func.isRequired,
        playlists: PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                thumbnail: PropTypes.string,
                description: PropTypes.string

            })),
            loading: PropTypes.bool
        }).isRequired
    }

    render() {
        return (
            <Container>
                <Title>Navegar {this.props.playlists.loading && <Loading />}</Title>
                <List>
                    {this.props.playlists.data.map(playlist => (
                        < Playlist to={`/playlists/${playlist.id}`}>
                            <img src={playlist.thumbnail} alt={playlist.title} />
                            <strong>{playlist.title}</strong>
                            <p>{playlist.description}</p>
                        </Playlist>
                    ))}
                </List>
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    playlists: state.playlists
})

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Browse)