
import { Route, Routes } from "react-router-dom";
import HomePage from './pizza/HomePage';
import Signup from "./pizza/Signup";
import Login from "./pizza/Login";



function App() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </>
  );
}

export default App;
