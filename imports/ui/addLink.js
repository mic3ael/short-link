import React, {Component} from 'react';
import Modal from 'react-modal';
import {Meteor} from 'meteor/meteor';

export default class AddLink extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        this.state = {
            url: '',
            isOpen: false,
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();

        const {url} = this.state;

        Meteor.call('links.insert', url, (err, res) => {
            if (!err)
                return this.handleModalClose();

            this.setState({error: err.reason});
        });

    }
    onChange(e) {
        this.setState({url: e.target.value.trim()});
    }
    handleModalClose() {
        this.setState({isOpen: false, url: '', error: ''});
    }
    render() {
        return (
            <div>
                <button className="button" onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
                <Modal className="boxed-view__box" overlayClassName="boxed-view boxed-view--modal" isOpen={this.state.isOpen} contentLabel="Add Link" onAfterOpen={() => this.refs.url.focus()} onRequestClose={this.handleModalClose}>
                    <h1>Add Link</h1>
                    {this.state.error
                        ? <p>{this.state.error}</p>
                        : null}
                    <form className="boxed-view__form" onSubmit={this.onSubmit}>
                        <input type="text" ref="url" onChange={this.onChange} placeholder="URL" value={this.state.url}/>
                        <button className="button">Add Link</button>
                        <button type="button" className="button button--secondary" onClick={this.handleModalClose}>Cancel</button>
                    </form>
                </Modal>
            </div>
        );
    }
}
