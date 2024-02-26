import { Navbar, Footer } from "./components";
import { Home } from "./Pages";
import "./App.scss";

function App() {
  return (
    <div className="app">
      {/* <RecommendCourse /> */}
      {/* <Courses /> */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
