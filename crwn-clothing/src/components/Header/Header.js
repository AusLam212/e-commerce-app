import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import { ReactComponent as Logo} from "../../assets/crown.svg"

function Header() {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div classname="options">
                <Link style={{padding: "10px 15px"}} to="/shop">
                    SHOP
                </Link>
                <Link style={{padding: "10px 15px"}} to="/shop">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;