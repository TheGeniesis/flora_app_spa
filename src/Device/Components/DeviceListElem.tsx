import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoutingList } from "../../Shared/Router/RoutingList";
import { Router } from "../../Shared/Router/Router";
import { useAlert } from 'react-alert'

interface IDevice {
    id: string;
    name: string;
}

interface IComponentProps {
    device?: IDevice;
}

export function DeviceListElem(props: IComponentProps) {
    const alert = useAlert();
    const [device, setDevice] = useState(props.device);

    const deleteDevice = () => {
        if (device) {
            Router.delete(RoutingList.DELETE_DEVICE, {}, { id: device.id })
                .then((response) => {
                    if (204 === response.status) {
                        alert.success("Data removed successfully")
                        setDevice(undefined);
                        return;
                    }
                    alert.error("Data removed successfully")
                });
        }
    };

    return device ? (
        <tr>
            <td>{device.id}</td>
            <td>{device.name}</td>
            <td>
                <NavLink to={`/device/${device.id}/measurement`} className="btn btn-secondary">Measurement</NavLink>
                <NavLink to={`/device/edit/${device.id}`} className="btn btn-primary">Edit</NavLink>
                <button type="button" onClick={deleteDevice} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ) : null;
}
