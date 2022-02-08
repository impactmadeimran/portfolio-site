import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div className="App bg-gray-900 text-white">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
