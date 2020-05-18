import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Connexion extends Component {

    state = {
        pseudo : ' ',
        goToChat: false
    }

    haldleChange = event => {

        const pseudo = event.target.value
        this.setState( {pseudo} )
    }
    handleSubmit = event =>{

        event.preventDefault()
        this.setState( {goToChat : true})
    }

    render() {

        if(this.state.goToChat){
         return <Redirect push to= {`/pseudo/${this.state.pseudo}`} />
         /* 
         -ici on utilise une template string pour avoir une chaine de caractère + qqch de dynamique
         donc à la place d'un simples quotes ' ' on utilise ` `

         -push permet de garder en mémoire la connexion: c-a-d faire des retours en arrière <-
            et lorsqu'on revient sur la page avec la flèche -> on retombe sur la même page

         */
        }

        return (
            <div className= 'connexionBox'>
                <form className='connexion' onSubmit = {this.handleSubmit} >
                    <input 
                        value = {this.state.pseudo}
                        onChange = { this.haldleChange}
                        placeholder='Pseudo'
                        type="text"
                        required />
                    <button type="submit">GO</button>
                </form>                
            </div>
        );
    }
}

export default Connexion;