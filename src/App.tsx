import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-2xl">Hello World</h1>
      <Routes>
        <Route path="/" element={<div>HomePage</div>} />
      </Routes>
    </>
  );
}

export default App;
