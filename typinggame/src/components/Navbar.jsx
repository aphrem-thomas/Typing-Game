import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-lg navbar-light" >
                    <a className="navbar-brand" href="#">Touch Typing</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                      
                    </div>
                </nav>
           
        );
    }
}

export default Navbar;
