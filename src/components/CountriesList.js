import React from 'react'
import { Link } from 'react-router-dom'

import countries from '../countries.json'

function CountriesList(props) {
    return (
        <div style={{height: 350, width: 500, overflow: 'auto'}}>
            {countries.map((country) => 
                (
                    <div className='country-item'>
                        <Link to={`/countries/${country.cca3}`}><p>{country.flag} - {country.name.official}</p></Link>
                    </div>
                )
            )}
        </div>
    );
}

export default CountriesList;