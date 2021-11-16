import React from "react";
import {Nav} from "./Nav";
import {Routes} from "./Routes";
import 'bootstrap/dist/css/bootstrap.css';
import {App} from "./App";

export function Root() {
    return (
        <div>
            <Nav/>
            <App/>
            <Routes/>
        </div>
    );
}

