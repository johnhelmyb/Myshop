import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }
        axios.post('login', data).then(
            res=>{
                localStorage.setItem('token', res.token);
            }
        ).catch(
            err =>{
                console.log(err);
            }
        )
    };

    render () {
        return (
            <form onSubmit={this.handleSubmit}>

            <h3>Se connecter</h3>

            <div className="form-group">
                <label>E-mail</label>
                <input type="email" className="form-control" placeholder=""
                onChange={e => this.email = e.target.value} />
            </div>

            <div className="form-group">
                <label>Mot de passe</label>
                <input type="Mot de passe" className="form-control" placeholder=""
                onChange={e => this.password = e.target.value}/>
            </div>

            <button className="btn btn-primary btn-blok">Valider</button>
        </form>
        )
    }
}
