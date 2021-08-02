import { FetchDeviceResponse } from 'api/actions/device/deviceActions.types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { DevicesProps } from './Device.types';
export const Home = ({ getDevices }: DevicesProps) => {

  const [devices, setDevices] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {

      const result = await getDevices();

      const devices = result.map((data: FetchDeviceResponse) =>
        <tr>
          {/* <tr key={data.id}> */}
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>
            <Button id={`edit_button_device_id_${data.id}`} variant="warning">Edit</Button>
            <Button id={`delete_button_device_id_${data.id}`} variant="danger">Delete</Button>
          </td>
        </tr>
      )

      setDevices(devices)
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
          {/* {devices} */}
        </tbody>
      </Table>
      <Link className="btn btn-primary" to={AppRoute.createDevice}>
        Add new device
      </Link>
    </>
  );
};
