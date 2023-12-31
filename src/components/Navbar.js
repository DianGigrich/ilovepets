import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    return (

        <ul className="nav nav-underline">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
            </li>


        </ul>

    )
}