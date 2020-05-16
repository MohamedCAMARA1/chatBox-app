import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from './components/Connexion'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>        {/* Switch permet de prendre plusieur root (URL)*/}       
                <Route exact path ='/' component= {Connexion} />
                <Route path ='/pseudo/:pseudo'  component = {App}/>
                    {/* 
                    path = '/' signifie quand on est à la racine
                    le mot clé "exact" signifie qu'on ne doit avoir que la racine '/' et rien d'autre après
                    
                    path= '/pseudo/:unePage' signifie qu'on ne sait pas ce qui arrive après pseudo
                    */}
                <Route component = { NotFound} />
                {/* pas besoin de mettre le path car il exécute ce code 
                quand le chemin n'est pas trouvé */}
            
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
