import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { Location, Todos } from "./components";

function App() {
  return (
    <>
      {/* <h1 className="text-2xl">Hello World</h1> */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Todos />} />
          <Route path="/location" element={<Location />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
