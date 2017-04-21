import React, {Component} from 'react';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

export default class Login extends Component {
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

        Meteor.loginWithPassword({
            email
        }, password, err => {
            const toState = {
                error: ''
            };

            if (err)
                toState.error = 'Unable to login. Check email and password.';

            this.setState(toState);
        });

    }
    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Login to Short Link</h1>
                    {this.state.error
                        ? <p>{this.state.error}</p>
                        : null}
                    <form className="boxed-view__form" onSubmit={this.onSubmit} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button">Login</button>
                    </form>
                    <Link to="/signup">Have an account?</Link>
                </div>
            </div>
        );
    }
}
