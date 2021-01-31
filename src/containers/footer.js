import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/footer';

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Colunm>
                <Footer.Title>Service Cordial</Footer.Title>
                    <Footer.Link to="#">Service Client</Footer.Link>
                    <Footer.Link to="#">Aide</Footer.Link>
                </Footer.Colunm>

                <Footer.Colunm>
                <Footer.Title>Sortis de l'Usine</Footer.Title>
                    <Footer.Link to="#">Evitez les Intermédiaires</Footer.Link>
                </Footer.Colunm>

                <Footer.Colunm>
                <Footer.Title>Livraison Rapide</Footer.Title>
                    <Footer.Link to="#">Service</Footer.Link>
                    <Footer.Link to="#">Partenaire Mondial de DHL</Footer.Link>
                </Footer.Colunm>

                <Footer.Colunm>
                <Footer.Title>Sûr & Fiable</Footer.Title>
                    <Footer.Link to="#">Paiment sécurisé </Footer.Link>
                </Footer.Colunm>

                <Footer.Colunm>
                <Footer.Title>Qui sommes-nous?</Footer.Title>
                    <Footer.Link to="#">A propos de MyShop</Footer.Link>
                    <Footer.Link to="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                </Footer.Colunm>

                <Footer.Colunm>
                <Footer.Title>Service Client</Footer.Title>
                    <Footer.Link to="#">Nous contacter</Footer.Link>
                    <Footer.Link to="#">Nous Garanties</Footer.Link>
                    <Footer.Link to="#">Suivre votre commande</Footer.Link>
                </Footer.Colunm>

                <Footer.Colunm>
                <Footer.Title>RGPD</Footer.Title>
                    <Footer.Link to="#">Informations Légales</Footer.Link>
                    <Footer.Link to="#">Renvoyer un Article</Footer.Link>
                    <Footer.Link to="#">Vos Données Personnelles</Footer.Link>
                    <Footer.Link to="#">Conditions Générales de Vente</Footer.Link>
                    <Footer.Link to="#">Droits de Propriété Intellectuelle</Footer.Link>
                    <Footer.Link to="#">Tout Ce Qu'il Faut Savoir</Footer.Link>
                </Footer.Colunm>

                <Footer.Colunm>
                <Footer.Title>Paiement et Livraison</Footer.Title>
                    <Footer.Link to="#">Moyens de Paiement</Footer.Link>
                    <Footer.Link to="#">Jusqu'où livrons-nous</Footer.Link>
                    <Footer.Link to="#">Délais de Livraison</Footer.Link>
                </Footer.Colunm>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}