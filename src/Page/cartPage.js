import React from 'react'

export default function cartPage(props) {
    const productId = props.match.params.id;
    const qty = (props.location.search.split('=') []) :1;
    return (
        <div>
            <h1>Panier</h1>
            <p>Ajouter au panier : ProductId: {productId} Qts: {qty}</p>
        </div>
    )
}
