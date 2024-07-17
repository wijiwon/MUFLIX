import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Intro, Login } from "Pages";
import { Globalstyle } from "Styles";

function App() {
  return (
    <>
      <Globalstyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
