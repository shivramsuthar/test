import React, { Component } from 'react';
import { Form, Row, Button } from 'react-bootstrap'
import Authentication from './Authentication'
import './bootstrap.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            password: null,
            formErrors: {
                userId: '',
                password: '',
            }
        };

    }
    handlesummit = e => {
        e.preventDefault();
        if (this.state.userId === 'shivrfd' && this.state.password === 'shivrfd123') {
            alert(' Congratulation! ....Login Succesfull')
            Authentication.registerSucessfullLogin(this.state.userId,'User')
            window.location.href = './welcome'
        } else if (this.state.userId === 'admin' && this.state.password === 'password') {
            alert(' Congratulation! ....Login Succesfull')
            Authentication.registerSucessfullLogin(this.state.userId,'Admin')
            window.location.href = './welcome'
        } 
        else {
            console.log('Form invalid ')
            alert('invalid entry')
        }
    }
    handlechange = e => {
        e.preventDefault()
        const { name, value } = e.target
        let formErrors = this.state.formErrors
        switch (name) {
            case "userId":
                formErrors.userId =
                    value.length < 5 ? "minimum 5 characters required" : ""
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characters required" : ""
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
    }
    render() {
        const { formErrors } = this.state
        return (
            <div className="container">
                <h1> Welcome Back! to Darwin</h1>
                <h3>Login</h3>
                <div>
                    <Form noValidate className="form-check">
                        <Form.Group as={Row} className="form-group">
                            <Form.Label>
                                User ID
                             </Form.Label>
                            <Form.Control type="text" placeholder="User ID"
                                name="userId" onChange={this.handlechange} />
                        </Form.Group>
                        {/* show error for validation */}
                        {formErrors.userId.length > 0 && (<span style={{ color: "red" }}>
                            {formErrors.userId}</span>)}

                        <Form.Group as={Row} className="form-group">
                            <Form.Label>
                                Password
                             </Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                name="password" onChange={this.handlechange} />
                        </Form.Group>
                        {/* show error for validation */}
                        {formErrors.password.length > 0 && (<span style={{ color: "red" }}>
                            {formErrors.password}</span>)}

                        <Form.Group as={Row}>
                            <Button type="submit" className="btn btn-success" onClick={this.handlesummit} >Log In</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;