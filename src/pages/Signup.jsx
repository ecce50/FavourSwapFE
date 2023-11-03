import {useState} from "react"; 
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {e.preventDefault()

    try {
      const res = await axios.post("http://localhost:5005/auth/signup", {
        email,
        password,
      } );
      console.log("This is the axios post result", res)
      navigate("/login"); // Change to variable if it doesn't work
    } catch (error) {
      console.error("This is the error", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>
          <input type="email" value={email} required onChange={(e) => {setEmail(e.target.value);}} />
        </label>
        <label>
          <input type="password" value={password} required onChange={(e) => {setPassword(e.target.value);}} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup