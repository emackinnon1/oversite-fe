//Imports 
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

//App Imports
import "./HomePage.css";

const HomePage = () => {

const [search, setSearch] = useState('')
const [serchParam, setSearchParam] = useState("Name")


return (
    <section className ="home-page-container">
		<img className="seal-logo" src="/images/usa_seal.svg" alt="usa congress seal"></img>
        <h1>Search for Senators and Representatives</h1>
        <form className ="search-container">
        <select 
            className="search-params"
            id="search-params" 
            name="search-options"
            onChange={e => setSearchParam(e.target.value)}
            defaultValue = {serchParam}>    
            <option className="search-option" value="name">Name</option>
            <option className="search-option" value="state">State</option>
            <option className="search-option" value="zip">Zip</option>
            <option value="committee">Committee</option>
        </select>
        <input 
            className="search-input" 
            type= 'text' 
            placeholder="Search"
            value = {search}
            onChange = {e => setSearch(e.target.value)} >
        </input>
        <button type="submit" className="search-btn">Search</button>

        </form>
    </section>
)

}


    
export default HomePage
