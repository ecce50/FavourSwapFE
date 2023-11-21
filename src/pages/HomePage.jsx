import { Link } from "react-router-dom";
import "/style/global.css";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log in</Link>
      <Link to="/profile">Profile</Link>
    </>
  );
}

export default HomePage;
