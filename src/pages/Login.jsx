/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/Auth.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5005/auth/login", {
        email,
        password,
      });
      console.log("This is the axios post result", data);
      localStorage.setItem("authToken", data.token);
      await authenticateUser();
      if (isLoggedIn) {
        navigate("/profile"); // Change this if necessary to Profile
      }
    } catch (error) {
      console.error("This is the error", error);
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
}

export default Login;
