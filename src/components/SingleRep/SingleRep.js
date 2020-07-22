import React, { useState } from 'react'
import './SingleRep.css'

import Collapsible from '../Collapsible/Collapsible'



const SingleRep = () => {
    

    return(

        <section className="single-rep-container">
            <div className="bio-container">
                <h1>Bernard Sanders</h1>
                <img 
                    className="rep-img"
                    src="https://theunitedstates.io/images/congress/original/S000033.jpg"
                    alt="name of the rep from state">
                </img>
                <h3>Independant</h3>
                <h4>Senate</h4>
                <img className="district-img" src="/images/capital_hill.png" alt="capital hill placeholder"></img>
            </div>
            <div className="media-links-msg-input">
                <div className="state-links">
                <h2>Vermont</h2>
                <div>
                    <Collapsible title="Address">
                    <div> 
                        <p> 123 Main Street, Washington  DC
                        </p>
                    </div>
                    </Collapsible>
                 </div>
                <ul>
                    <li>Website</li>
                    <li>YouTube</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
                <form className='message-form'>
                    <textarea 
                        className="message-to-rep"
                        placeholder="Type your message here....">
                    </textarea>
                    <button
                        type="submit"> Send Message
                    </button>
                </form>
                </div>
            </div>
        </section>


    )



}

export default SingleRep
