import React, { Component } from "react"
// import PropTypes from "prop-types"

import MapGL, { Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css";

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Creators as ModalActions } from "../../store/ducks/modal"
import { Creators as DeveloperActions } from "../../store/ducks/developers"
import { Creators as ThemeActions } from "../../store/ducks/theme"


class Map extends Component {

    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -22.907104,
            longitude: -47.063240,
            zoom: 14
        }
    };

    componentDidCatch() {
        window.addEventListener("resize", this._resize);
        this._resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._resize);
    }

    _resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
    };


    handleMapClick = (e) => {
        e.preventDefault()
        const [longitude, latitude] = e.lngLat;

        const cord = {
            lat: latitude,
            long: longitude
        }

        this.props.addModalView(cord)
    }

    render() {
        return (
            <MapGL
                style={{ position: "absolute" }}
                {...this.state.viewport}
                onClick={this.handleMapClick}
                mapStyle={`mapbox://styles/mapbox/${this.props.theme}`}
                mapboxApiAccessToken={
                    "pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
                }
                onViewportChange={viewport => this.setState({ viewport })}
            >

                {this.props.data.map((userData, index) => {

                    return (
                        < Marker
                            latitude={userData.cord.lat}
                            longitude={userData.cord.long}
                            onClick={this.handleMapClick}
                            captureClick={true}
                        >
                            <img alt=""
                                style={{
                                    borderRadius: 100,
                                    width: 48,
                                    height: 48
                                }}
                                src={userData.photo_url}
                            />
                        </Marker>
                    )
                })
                }
            </MapGL >
        );
    }
}

const mapStateToProps = state => ({
    openedForm: state.modal.openedForm,
    data: state.developers.data,
    theme: state.theme,
    error: state.developers.error
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { ...ModalActions, ...DeveloperActions, ...ThemeActions },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Map);
