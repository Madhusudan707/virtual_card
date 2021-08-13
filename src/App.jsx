import { Routes, Route } from "react-router-dom";
import { Landing, Home, PageNotFound, PrivateRoute } from "./Pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <PrivateRoute path="/home" element={<Home />} />
        <PrivateRoute path="/your" element={<Home />} />
        <PrivateRoute path="/all" element={<Home />} />
        <PrivateRoute path="/blocked" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
