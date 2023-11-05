
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


function App() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
