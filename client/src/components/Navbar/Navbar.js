//The Navbar component info
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li class="left">Google Books</li>
                    <li class="right">Search {this.props.search} </li>
                    <li class="right2">Saved {this.props.saved}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;