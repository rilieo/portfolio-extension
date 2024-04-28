import "./App.css";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Todo from "./sections/ToDo";

import { images } from "./data";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Gallery children={images} />
      <Todo />
    </div>
  );
}

export default App;
