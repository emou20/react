import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Produits from './produits';
import './style.css'

class App extends Component {
    render() {
        return ( 
            <div>
            {Produits.produits.map((postDetail, i)=>{
             const stock = postDetail.etat;
             let displayetat;
             {stock == 1 ? displayetat='block' :  displayetat='none' }
            
            let nbrprod = postDetail.nbr_prod;
            let nbrcrit = postDetail.nbr_critique;
            let classcritique;
            console.log(nbrcrit);
            {nbrprod < nbrcrit ? classcritique='box_produits critique' :  classcritique='box_produits' };
            
             return (
             <div className={classcritique} style={{display:displayetat}}>
             <ul>
                <li className="name_produit">{postDetail.name}</li>
                <li className="prix_produit">{postDetail.prix} DTN</li>
                <li className="prix_nature">Nature : {postDetail.nature} </li>
                <li className="prix_nature"> {stock == 1 ? 'Actif' : 'non Actif' }</li>
                <li className="qnt_prod"> Vous reste: {nbrprod} </li>
                 <li className="qnt_crit"> quantité critique: {nbrcrit} </li>
                
            
               
             </ul>
            </div>
            );
            })}
            </div>
        )
    }
}

export default App;