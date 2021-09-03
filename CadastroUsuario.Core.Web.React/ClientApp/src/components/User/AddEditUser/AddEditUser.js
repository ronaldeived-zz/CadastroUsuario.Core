import React, { Component } from 'react';
import './AddEditUser.css';

export class User {
}

export class AddEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", user: new User(), loading: true };
        this.inicialize();
        this.handleCancel.bind(this);
        this.handleSave.bind(this);
    }

    async inicialize() {
        const id = this.props.match.params["id"];

        if (id != null) {
            const response = await fetch('api/User/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", user: data, loading: false });
        }
        else {
            this.state = { title: "Create", users: new User(), loading: false }
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Users</h3>
                {contents}
            </div>
        );
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/ListUsers");
    }

    handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        //if (this.state.User.id > 0) {
        //    const response1 = fetch('api/User/' + this.state.user.id, { method: "PUT", body: data });
        //    this.props.history.push('/ListUsers');
        //}
        //else {
        //    const response2 = fetch('api/User/' , { method: "POST", body: data });
        //    this.props.history.push('/ListUsers');
        //}
    }

    renderCreateForm() {
        return (
            <>
                <h4 className="PageHeading">Enter User Informations</h4>
                {
                    this.state.loading ? <p>Carregando</p> : (
                        <>
                            <form onSubmit={this.handleSave}>
                                <input name="zequinho" defaultValue={this.state.user.firstName} placeholder="First Name" />
                                <input name="outrocampo" defaultValue={this.state.user.secondName} placeholder="Second Name" />
                                <button>Save</button>
                            </form>
                        </>
                    )
                }
            </>
            );
    }
}