import "./App.css";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";

import { images } from "./data";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Gallery children={images} />
    </div>
  );
}

export default App;
