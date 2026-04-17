import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
      );
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center vh-100  align-items-center">
        <div className="col-md-4">
          <form className="form" method="post" onSubmit={handleSubmit}>
            <div className="title">
              Welcome,
              <br />
              <span>sign up to continue</span>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <input
              className="input"
              name="email"
              placeholder="Email"
              type="email"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              className="input"
              name="password"
              placeholder="Password"
              type="password"
              value={userData.password}
              onChange={handleChange}
            />
            <button className="button-confirm">Let`s go →</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
