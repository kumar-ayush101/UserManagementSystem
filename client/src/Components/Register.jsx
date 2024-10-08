import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/reducer/userSlice";
import './Register.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    city: "Botad",
  });

  const [file, setFile] = useState([]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
  
    formdata.append("name", input.name);
    formdata.append("email", input.email);
    formdata.append("dob", input.dob);
    formdata.append("gender", input.gender);
    formdata.append("city", input.city);
    formdata.append("photo", file);
    console.log("Form Data:", {
      name: input.name,
      email: input.email,
      dob: input.dob,
      gender: input.gender,
      city: input.city,
      photo: file,
  });
    try {
      const response = await axios.post("http://localhost:8000/api/v1/register", formdata);
      console.log(response);
      dispatch(getUsers());
      navigate("/");
  } catch (error) {
      console.error("Error during registration:", error.response.data);
  }
  };

  return (
    <div className="register-container">
    <div className="container flex items-center justify-content-center">
      <h2
        className="text-center text-white p-2 m-2"
        style={{ backgroundColor: "blue" }}
      >
        Add New User
      </h2>

      <form className="p-2 m-2" onSubmit={handleSubmit}>
        <div class="form-group m-3">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name"
            value={input.name}
            name="name"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div class="form-group m-3">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Email"
            value={input.email}
            name="email"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div class="form-group m-3">
          <label for="D.O.B">Date Of Birth</label>
          <input
            type="date"
            class="form-control"
            id="dob"
            placeholder="Enter D.O.B."
            value={input.dob}
            name="dob"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>
        <label for="gender">Gender</label>
        <div class="form-group">
          <div class="form-check form-check-inline m-3">
            <input
              class="form-check-input"
              type="radio"
              id="gender"
              value="Male"
              name="gender"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <label class="form-check-label" for="gender">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="female"
              value="Female"
              name="gender"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <label class="form-check-label">Female</label>
          </div>
        </div>
        <div class="form-group">
          <label>City</label>
          <select
            className="form-select m-2"
            name="city"
            onChange={(e) =>{
              setInput({ ...input, [e.target.name]: e.target.value })
              console.log(input
              )
            }
            }
          >
            <option value="Botad" selected>
              Botad
            </option>
            <option value="surat">Surat</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="bhavnagar">Bhavnagar</option>
          </select>
        </div>
        <div class="form-group m-3">
          <label>Profile Photo</label>
          <input
            type="file"
            name="photo"
            onChange={(e) => setFile(e.target.files[0])}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <Link to={"/"}>
          <button className="btn btn-danger m-3">Cancel</button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Register;