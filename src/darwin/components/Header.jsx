import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    Logout = () => {
        localStorage.removeItem('authenticatedUserId')
        localStorage.removeItem('authenticatedUserType')
        window.location.href = '/Logout'
    }
    render() {
        return (
            <nav className="darwinheader">
                <div className='navbar'>
                    <h2>Welcome to Darwin</h2>
                    <button onClick={this.Logout} className="btn btn-success">Log Out</button>
                </div>
                <p className="greeting"> Hi, {localStorage.getItem('authenticatedUserId')}</p>
            </nav>
        );
    }
}

export default Header;