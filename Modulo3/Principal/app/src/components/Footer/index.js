import React from 'react';
import PropsTypes from "prop-types"

import { connect } from "react-redux"

const Footer = ({ count }) => <p style={{ backgroundColor: "#fff", marginBottom: "0px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "60px", position: "fixed", bottom: "0px", fontWeight: "bold" }}> Você tem {count} favoritos</p >

Footer.propTypes = {
    count: PropsTypes.number.isRequired
}
const mapStateToProps = state => ({
    count: state.favorites.data.length
})

export default connect(mapStateToProps)(Footer)