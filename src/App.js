import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {

  state = {
    messages : {},
    pseudo : this.props.match.params.pseudo //grace au routeur, on peut acceder à plusieur paramètres
                                            //nottemment celui de l'url
  }

  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = message //permet d'avoir un format message-dateDuMoment
                                           //ce qui permet également d'avoir 1 unicité des messages
                                              
    this.setState({ messages })
  }


  render () {

    const messages = Object
    .keys (this.state.messages)
    .map(key => (
      <Message 
      key = {key}
      message = {this.state.messages[key].message}
      pseudo = {this.state.messages[key].pseudo}  />
    ))
    return (
      <div className='box'>
        <div>
          <div className = 'message'>  
              {messages}
          </div>
        </div>

        <Formulaire 
        length = {150}
        pseudo = {this.state.pseudo}
        addMessage={this.addMessage}
        />

      </div>
    )
  }
}

export default App
