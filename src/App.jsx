import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* 🔥 Common Layout */}
      <Navbar />

      {/* 🔀 Pages Render */}
      <AppRoutes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;