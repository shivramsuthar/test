import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <footer className="footer">
            <span className="text-muted">All Rights Reserved @ <b>Darwin</b></span>
        </footer>
        );
    }
}

export default Footer;