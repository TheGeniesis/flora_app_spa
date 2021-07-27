import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useAuthState } from 'hooks/useAuthState/useAuthState';

export const Home = () => {
  const { user } = useAuthState();

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
          <tr>
            <td>test</td>
            <td>test</td>
            <td>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary">Add new device</Button>
    </>
  );
};