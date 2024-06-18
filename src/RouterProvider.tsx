import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import mainHome from "./mainHome";
import justAbout from "./justAbout";
import Contacts from "./Contacts";
import gameOfChance from './gameOfChance';
import Factorial from "./Factorial";
import { App } from "./bubbleMethod";

const RouterProvider : React.FC = () => {
    return (
        <Router>
            <nav className="nav-ul">
                <ul className="ul-list">
                    <li className="mainHome-li">
                        <Link to="/">main Home</Link>
                    </li>
                    <li className="justAbout-li">
                        <Link to="/justAbout">JustAbout</Link>
                    </li>
                    <li className="Contacts-li">
                        <Link to="/Contacts">Contacts</Link>
                    </li>
                    <li className="gameOfChance-li">
                        <Link to="/gameOfChance">games Of Chance</Link>
                    </li>
                    <li className="Factorial-li">
                        <Link to="/Factorial">Factorial</Link>
                    </li>
                    <li className="bubbleMethod-li">
                        <Link to="/bubbleMethod">bubble Method</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" Component={mainHome} />
                <Route path="/justAbout" Component={justAbout} />
                <Route path="/Contacts" Component={Contacts} />
                <Route path="/gameOfChance" Component={gameOfChance} />
                <Route path="/Factorial" Component={Factorial} />
                <Route path="/bubbleMethod" Component={App} />
            </Routes>
        </Router>
    );
};

export default RouterProvider;