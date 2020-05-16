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
         return <Redirect to= {`/pseudo/${this.state.pseudo}`} />
         /*ici on utilise une template string pour avoir une chaine de caractère + qqch de dynamique
         donc à la place dsimples quotes ' ' on utilise ` `
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