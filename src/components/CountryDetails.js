import React from "react";
import countries from "../countries.json";
import { Link } from 'react-router-dom'

function CountryDetails(props) {
    const country = countries.find(element => element.cca3 == props.match.params.countryCode);

    return (
        <div style={{float: 'right'}}>
            <h1>{country.name.official}</h1>
            <br/>
            <p>Area: {country.area} km<sup>2</sup></p>
            <p>Bordering:</p>
            <div>
                <ul>
                    {country.borders.map((country) => (
                        <li><Link to={`/countries/${country}`}><p>{countries.find(e => e.cca3 == country).name.official}</p></Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CountryDetails;