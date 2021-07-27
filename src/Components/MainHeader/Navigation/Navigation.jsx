import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";
import Button from "../../UI/Button/Button";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  // const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
