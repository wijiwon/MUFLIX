import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Globalstyle } from "Styles";
import { Intro, Login, LoginHelp, Signup } from "Pages";

function App() {
  return (
    <>
      <Globalstyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginHelp" element={<LoginHelp />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
