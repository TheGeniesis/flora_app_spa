import React, { useEffect, useState } from "react";
import { DeviceListElem } from '../Components/DeviceListElem';
import { Router } from "../../Shared/Router/Router";
import { RoutingList } from "../../Shared/Router/RoutingList";
import { NavLink } from "react-router-dom";

interface IDevice {
    name: string;
    id: string;
}

export function Devices() {
    const [devices, setDevices] = useState([]);
    useEffect(() => {
        Router.fetch(RoutingList.GET_DEVICES)
            .then((res: any) => {
                setDevices(
                    res
                );
            });
    }, []);

    return (
        <div className="container">
            <h2>Devices list <NavLink to={'/device/new'} className="btn btn-success">Add</NavLink></h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device: IDevice) => (
                        <DeviceListElem key={device.id}
                            device={device}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
