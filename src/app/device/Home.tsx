import { FetchDeviceResponse, FetchDevicesResponse } from 'api/actions/device/deviceActions.types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { DevicesProps } from './Device.types';
import { DeviceRow } from './DeviceRow';
export const Home = ({ getDevices }: DevicesProps) => {

  const [devices, setDevices] = useState<FetchDevicesResponse>();

  useEffect(() => {
    async function fetchMyAPI() {

      const result = await getDevices();


      setDevices(result)
    }

    fetchMyAPI()
  })

  return (
    <>
      <h1>List of devices</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devices && devices.map((data: FetchDeviceResponse) =>
            <DeviceRow key={data.id} {...data} />
          )}
        </tbody>
      </Table>
      <Link className="btn btn-primary" to={AppRoute.createDevice}>
        Add new device
      </Link>
    </>
  );
};
