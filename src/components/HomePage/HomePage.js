//Imports 
import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import StatePicker from '../StatePicker/StatePicker'

//App Imports
import "./HomePage.css";
import { UserContext } from '../App/userContext';

const HomePage = () => {

const [search, setSearch] = useState('')
const [searchParam, setSearchParam] = useState("Name")
const [userState, setUserState] = useContext(UserContext)

const setNewValue = (newValue) => {
    console.log('this is the State code:' + newValue);
  }

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
            defaultValue = {searchParam}>    
            <option className="search-option" value="name">Name</option>
            <option className="search-option" value="state">State</option>
            <option className="search-option" value="zip">Zip</option>
            <option value="committee">Committee</option>
        </select>
        {searchParam === "state"?  
        <StatePicker 
                    width = "40%"
                    display = "flex"
                    flexDirection ="column" 
                    height = "4.8em"
                    justifyContent = "space-around"
                    alignItems = "center"
                    selectWidth= "100%"
                /> : 
        <input 
            className="search-input" 
            type= 'text' 
            placeholder="Search"
            value = {search}
            onChange = {e => setSearch(e.target.value)} >
        </input>
        }
        <button type="submit" className="search-btn"><img src="/images/search.svg" alt="search icon"/></button>

        </form>
    </section>
)

}


    
export default HomePage
