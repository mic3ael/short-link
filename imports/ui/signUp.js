import React, {Component} from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if (password.length < 9)
            return this.setState({error: 'Password must be more than 8 characters long'});

        Accounts.createUser({
            email,
            password
        }, err => {
            const toState = {
                error: ''
            };

            if (err)
                toState.error = err.reason;

            this.setState(toState);
        });
    }
    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Join Short Link</h1>
                    {this.state.error
                        ? <p>{this.state.error}</p>
                        : null}
                    <form className="boxed-view__form" onSubmit={this.onSubmit} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button">Create Account</button>
                    </form>
                    <Link to="/">Already have an account?</Link>
                </div>
            </div>
        );
    }
}
