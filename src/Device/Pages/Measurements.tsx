import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RoutingList } from "../../Shared/Router/RoutingList";
// import { generateRoute, Router } from "../../Shared/Router/Router";
import { Router } from "../../Shared/Router/Router";

interface RouteParams {
    id: string
}

interface IMeasurement {
    id: string;
    humility: number;
    light: number;
    temperature: number;
    waterLevel: number;
    measureDate: string;
}

export function Measurements() {
    const params = useParams<RouteParams>();
    const [measurements, setMeasurements] = useState([]);
    useEffect(() => {
        if (params.id) {
            Router.fetch(RoutingList.GET_MEASUREMENT, {}, { id: params.id })
                .then((res: any) => {
                    setMeasurements(
                        res
                    );
                });
        } else {
            Router.fetch(RoutingList.GET_MEASUREMENTS)
                .then((res: any) => {
                    setMeasurements(
                        res
                    );
                });
        }
    }, []);

    return <div className="container">
        <h2>Measurements</h2>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>humility</th>
                    <th>light</th>
                    <th>temperature</th>
                    <th>waterLevel</th>
                    <th>measureDate</th>
                </tr>
            </thead>
            <tbody>
                {measurements.map((measurement: IMeasurement) => (

                    // <DeviceListElem key={device.id}
                    //     device={device}
                    // />

                    <tr>
                        <td>{measurement.id}</td>
                        <td>{measurement.humility}</td>
                        <td>{measurement.light}</td>
                        <td>{measurement.temperature}</td>
                        <td>{measurement.waterLevel}</td>
                        <td>{measurement.measureDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
}
