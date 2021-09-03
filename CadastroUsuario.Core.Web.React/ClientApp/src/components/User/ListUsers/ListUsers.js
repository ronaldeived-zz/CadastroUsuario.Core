import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class ListUsers extends Component {
    static displayName = "List of Users";

    constructor() {
        super();
        this.state = { users: [], loading: true }
    }

    componentDidMount() {
        this.populaUserData();
    }

    static handleEdit(id) {
        window.location.href = "/EditUser/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Do you want delete this user : " + id)) {
            return;
        }
        else {
            fetch('api/user/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "ListUsers";
                    alert('Deletado com Sucesso!');
                })
        }
    }

    static renderUsersTable(users) {
        console.log(users);
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Birth</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(prod =>
                        <tr key={prod.id}>
                            <td>{prod.cpf}</td>
                            <td>{prod.rg}</td>
                            <td>{prod.firstName}</td>
                            <td>{prod.secondName}</td>
                            <td>{prod.birth}</td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(prod.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(prod.id)}>Delete</button>
                            </td>

                        </tr>

                    )}
                </tbody>
            </table>
        );

    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em> </p>
            : ListUsers.renderUsersTable(this.state.users);

        return (
            <div>
                <h1 id="tabelLabel">List of users</h1>
                <p>Page list of users</p>
                <p>
                    <Link to="/AddUser">Register user</Link>
                </p>
                {contents}
            </div>
        );
    }


    async populaUserData() {
        const response = await fetch('api/user');
        const data = await response.json();
        this.setState({ users: data, loading: false });
    }
}