import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/reducer/userSlice";
import './Home.css'; // Import Home CSS

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.users);
  return (
    <div className="home-container">
      <h2 style={{ backgroundColor: "blue" }} className="text-center text-white p-2 m-2">
        User Management System
      </h2>
      <Link to={"/register"}>
        <button className="btn btn-primary">
          <i className="fa fa-home" />
          &nbsp; Add Users
        </button>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>City</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.id}> {/* Add key prop */}
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
              <td>
                <img
                  src={`http://localhost:8000/${user.photo}`}
                  className="img img-rounded"
                  height="100px"
                  width="100px"
                  alt={`${user.name}'s profile`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
