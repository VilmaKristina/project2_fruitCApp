import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Track from "./pages/TrackFruit";
import Fruit from "./pages/FruitInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <section className="homeContainer">
        <Router>
          <Header />
          <main className="mainContent">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/track" element={<Track />} />
              <Route path="/:id" element={<Fruit />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </section>
    </main>
  );
}

export default App;
