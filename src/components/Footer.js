import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col">
                        <h3>Paiement et Livraison</h3>
                        <ul className="list-unstyled">
                            <li><p>Moyens de Paiement</p></li>
                        </ul>
                        <h3>Livraison Rapide</h3>
                        <ul className="list-unstyled">
                            <li><p>Partenaire Mondial de DHL</p></li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className="col">
                        <h3>Sortis de l'Usine</h3>
                        <ul className="list-unstyled">
                            <li><p>Evitez les Intermédiaires</p></li>
                            <h3>Sûr & Fiable</h3>
                        <ul className="list-unstyled">
                            <li><p>Paiment sécurisé </p></li>
                        </ul>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className="col">
                        <h3>Service Client</h3>
                        <ul className="list-unstyled">
                            <li><p>Garantie Satisfaction de 7 Jours</p></li>
                        <h3>Service Cordial</h3>
                        <ul className="list-unstyled">
                            <li><p>Nous contacter</p></li>
                        </ul>
                        </ul>
                    </div>
                    {/*Column4*/}
                    <div className="col">
                        <h3>Qui sommes-nous?</h3>
                        <ul className="list-unstyled">
                            <li><p>A propos de MyShop </p></li>
                        </ul>
                        <div> <Link to="/footerPages/conditionGdeVente.js">Informations Légales</Link></div>
                        <ul className="list-unstyled">
                            <li><p>Conditions Générales de Vente</p></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
