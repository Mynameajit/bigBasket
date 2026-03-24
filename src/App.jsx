import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BottomNav from "./components/common/BottomNav";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <BottomNav />

    </BrowserRouter>
  );
};

export default App;