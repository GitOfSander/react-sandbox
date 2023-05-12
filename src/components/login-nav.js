import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../assets/scss/components/login-nav.module.scss";

function LoginNavComponent() {
    return (
        <div className={ styles.nav }>
            <ul>
                <li><NavLink to="/registreren">Registreren</NavLink></li>
                <li><NavLink to="/">Inloggen</NavLink></li>
                <li><NavLink to="/wachtwoord-vergeten">Wachtwoord vergeten</NavLink></li>
            </ul>
        </div>
    )
}
  
export default LoginNavComponent