import axios from 'axios';
import React, { Component } from 'react';

export default class Register extends Component {
    handleSubmit = e =>{
        e.prevenetDefault();
        const data = {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };
        axios.post('register',data).then(
            res=>{
                console.log(res)
            }
        ).catch(
            err =>{
                console.log(err);
            }
        )
    };

    render() {
         return (
        <form onSubmit={this.handleSubmit}>
            <h3>S'inscrire</h3>
            <div className="form-group">
                <label>Nom</label>
                <input type="text" className="form-control" placeholder=""
                onChange={e => this.name = e.target.value}/>
            </div>

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

            <div className="form-group">
                <label>Confirmez mot de passe</label>
                <input type="Mot de passe" className="form-control" placeholder=""
                onChange={e => this.confirmPassword = e.target.value}/>
            </div>

            <button className="btn btn-primary btn-blok">Valider</button>
        </form>  
        ) 
    }

    
};
