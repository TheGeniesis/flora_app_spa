import {HashRouter, Route} from "react-router-dom";
import {Home} from "./Home";
import {Devices} from "../Device/Pages/Devices";
import {DeviceAdd} from "../Device/Pages/DeviceAdd";
import {DeviceEdit} from "../Device/Pages/DeviceEdit";
import React from "react";

export const Routes = () => {
    return (
        <HashRouter>
            <div>
                <Route exact path="/" component={Home}/>

                <Route path="/devices" component={Devices}/>
                <Route path="/device/new" component={DeviceAdd}/>
                <Route path="/device/edit/:id" component={DeviceEdit}/>
            </div>
        </HashRouter>
    );
};
