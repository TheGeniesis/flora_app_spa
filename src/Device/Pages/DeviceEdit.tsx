import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {DeviceEditForm, IDevice} from "../Components/DeviceEditForm";
import {RoutingList} from "../../Shared/Router/RoutingList";
import {generateRoute, Router} from "../../Shared/Router/Router";
import {FormActionEnum} from "../../Shared/Enum/FormActionEnum";

interface RouteParams {
    id: string
}

export function DeviceEdit() {
    const params = useParams<RouteParams>();
    const [device, setDevice] = useState<IDevice>();

    useEffect(() => {
        const getDevice = function () {
            Router.fetch(RoutingList.GET_DEVICE, {}, {id: params.id})
                .then((res: any) => {
                    setDevice(res)
                });
        };
        getDevice();
    }, []);

    const deviceEditFormProps = {
        routing: generateRoute(RoutingList.PUT_DEVICE, {id: params.id}),
        redirect: '/device/edit/',
        action: FormActionEnum.edit,
        headerPrefix: "Edit",
        device: device
    };

    return device ? <DeviceEditForm {...deviceEditFormProps}/> : <div></div>;
}
