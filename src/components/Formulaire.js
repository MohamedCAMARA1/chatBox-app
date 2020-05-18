import React, { Component } from 'react';

class Formulaire extends Component {

    state = {
        message : ''
    }

    createMessage = () =>{
        const { addMessage, pseudo} = this.props

        const message = {
            pseudo, //equivaut à pseudo : pseudo (en destructurng)
            message: this.state.message
        }
        addMessage(message)

        //Reset
        this.setState( {message : '' })
    }

    handleSubmit = event =>{
        event.preventDefault() //pour lui demander que ce soit nous qui gerions
        this.createMessage()
    }
    handleChange = event =>{
        const message = event.target.value
        this.setState({message})
    }
   
   
   
    render() {
        return (
           <form
               className= 'form'
                onSubmit= {this.handleSubmit}>

                   <textarea
                   value= {this.state.message}
                    onChange = {this.handleChange}
                    required
                    maxLength='140'/>

                    <div className='info'>
                        140
                    </div>

                    <button type='submit' >
                        envoyer
                    </button>          
            </form>
        );
    }
}

export default Formulaire;