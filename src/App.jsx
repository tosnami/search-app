import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <Routes>
       <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}

export default App;