import "./App.css";
import Details from "./Components/Details";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Home />
      <Details />
      <Products />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
