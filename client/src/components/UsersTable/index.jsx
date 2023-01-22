import Table from "react-bootstrap/Table";

import "./UsersTable.css";

const UsersTable = ({ users }) => {
  return (
    <>
      <Table striped hover responsive>
        <thead>
          <tr className="dark-column">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 ? (
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>
                <p>No data found</p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default UsersTable;
