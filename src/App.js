import countries from './countries.json'
import React from 'react'

import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: []
        }
    }


    componentDidMount() {
        this.setState({countries: countries});
    }

    render() {
        return (
            <div className="App">
                <Navbar />
    
                <div className="container">
                    <div className="row">
                        <CountriesList countries={this.state.countries} />
                        <Route path="/countries/:countryCode" component={CountryDetails} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;