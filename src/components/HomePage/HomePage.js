//Imports 
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

//App Imports
import routes from '../setup/routes'
import './HomePage.css'


const HomePage = () => {





return (
    <section className ="home-page-container">
        <h1>Search for Senators and Representatives</h1>
        <form className ="search-container">
        <select id="search-params" name="search-options">
            <option  defaultValue  >
            -- select an option --
            </option>
            <option value="name">Name</option>
            <option value="state">State</option>
            <option value="zip">Zip</option>
            <option value="committee">Committee</option>
        </select>
        <input type= 'text' placeholder="Search"></input>
        <button type="submit" className="search-btn">Search</button>

        </form>
    </section>
)

}


    
export default HomePage
