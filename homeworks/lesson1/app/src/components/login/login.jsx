import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './login.css';

class LoginForm extends Component {

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export { LoginForm};