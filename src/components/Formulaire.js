import React, { Component } from 'react';

class Formulaire extends Component {

    state = {
        message : '', 
        length: this.props.length
    }

    createMessage = () =>{
        const { addMessage, pseudo, length} = this.props

        const message = {
            pseudo, //equivaut à pseudo : pseudo (en destructurng)
            message: this.state.message
        }
        addMessage(message)

        //Reset
        this.setState( {message : '' , length})
    }

    handleSubmit = event =>{
        event.preventDefault() //pour lui demander que ce soit nous qui gerions
        this.createMessage()
    }
    handleChange = event =>{
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({message, length})
    }
   handleKeyUp = event =>{
       //console.log ("touche appuyée " + event.key)
       if (event.key === 'Enter'){
           this.createMessage()
       }
   }
   
   
    render() {
        return (
           <form
               className= 'form'
                onSubmit= {this.handleSubmit}>

                   <textarea
                   value= {this.state.message}
                    onChange = {this.handleChange}                   
                    /*
                    onKeyUp permet de faire une action lorque le btn de la souris est relaché
                    */
                    onKeyUp = {this.handleKeyUp}  
                    required
                    maxLength = {this.props.length}/>

                    <div className='info'>
                        {this.state.length}
                    </div>

                    <button type='submit' >
                        envoyer
                    </button>          
            </form>
        );
    }
}

export default Formulaire;