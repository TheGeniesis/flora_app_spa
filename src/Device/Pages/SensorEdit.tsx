import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SensorEditForm, ISensor } from "../Components/SensorEditForm";
import { RoutingList } from "../../Shared/Router/RoutingList";
import { generateRoute, Router } from "../../Shared/Router/Router";
import { FormActionEnum } from "../../Shared/Enum/FormActionEnum";

interface RouteParams {
    id: string
}

export function SensorEdit() {
    const params = useParams<RouteParams>();
    const [sensor, setSensor] = useState<ISensor>();

    useEffect(() => {
        const getSensor = function () {
            Router.fetch(RoutingList.GET_SENSOR, {}, { device_id: params.id })
                .then((res: any) => {
                    setSensor(res ? res[0] : [])
                });
        };
        getSensor();
    }, []);

    const sensorEditFormProps = {
        routing: generateRoute(RoutingList.PUT_SENSOR, { device_id: params.id, id: sensor?.id }),
        // redirect: '/sensor/edit/',
        action: FormActionEnum.edit,
        headerPrefix: "Edit",
        sensor: sensor
    };

    return sensor ? <SensorEditForm {...sensorEditFormProps} /> : <div></div>;
}
