import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
//import Home from './pages/Home';
import LandingPage from './Pages/landingPage/index';
import Formulario from './components/Form/form'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Formulario} />
                <Route path='/ladingPage'component={LandingPage}/>
            </Switch>
        </BrowserRouter>
    );
}