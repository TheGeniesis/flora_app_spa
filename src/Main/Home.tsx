import React from "react";
import { NavLink } from "react-router-dom";
import { getEnvVar } from "src/Config/App";

export function Home() {
    return (
        <div className="container rounded">
            <h2 className="pt-3">Devices board</h2>
            <article>
                <div className="row col-md-12">
                    <div className="col-lg-6 col-sm-12  mb-3">
                        <div className="mb-3 grafana-img">
                            <img alt="Screen from Grafana" src="img/grafana.png" />
                        </div>
                        <div>
                            <a className="btn btn-info" href={getEnvVar('GRAFANA_URL')} target="_blank">Grafana</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="mb-3">
                            <img className="wemos-img" alt="Arduino device" src="img/wemos.jpg" />
                        </div>
                        <div>
                            <NavLink to="/devices" className="btn btn-info">Devices</NavLink>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
