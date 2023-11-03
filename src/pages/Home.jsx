import { Link } from "react-router-dom";

export function Home() {
    return (
      <>
        <h1>Is this working?</h1>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </>
    );
}

