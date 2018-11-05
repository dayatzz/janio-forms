import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
        <div className="banner-container">
            <div className="d-flex flex-column align-items-center bg-white w-100 banner">
                <img src="https://ops-demo.janio.asia/static/media/janio-main-logo.a0d88b6d.png" className="logo-container img-fluid mb-3 mt-5 pt-5" alt="" />
            </div>
            <div className="divider mb-3"></div>
        </div>
        )
    }
}

export default Banner