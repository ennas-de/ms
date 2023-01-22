import { useState, useEffect } from "react";
import axios from "axios";
import API from "../../apis/api";

import UsersTable from "../../components/UsersTable";

import "./Users.css";

const Users = ({ searchTerm }) => {
  const [users, setUsers] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await axios.get(`${API}/users/?q=${searchTerm}`);
      setUsers(res.data);
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <section className="main">
        {isLoading ? (
          "Loading..."
        ) : (
          <UsersTable users={users} id="data-table" />
        )}
      </section>
    </div>
  );
};

export default Users;
