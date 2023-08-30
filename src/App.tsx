import {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { LocationPage, Todos } from "./components";

function App() {
  const [isFirst, setIsFirst] = useState(true)

  function changeIsFirst() {
    setIsFirst(false)
  }

  return (
    <>
      {/* <h1 className="text-2xl">Hello World</h1> */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Todos />} />
          <Route path="/location" element={<LocationPage isFirst={isFirst} changeIsFirst={changeIsFirst} />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
