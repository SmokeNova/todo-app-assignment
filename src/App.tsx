import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* <h1 className="text-2xl">Hello World</h1> */}
      <Routes>
        <Route path="/" element={<div>HomePage</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
