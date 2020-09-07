import React, { Component } from 'react';
class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="container">
                <h2> You are Logged out</h2>
                <h5>Thank You</h5>

                <div style={{ textAlign: "center" }}>
                    Already have an account! <b><a style={{ color: "blue" }} href="/login  ">Login </a></b>Now
                </div>
            </div>
        );
    }
}

export default Logout;