import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
    <div>
      <Navigation/>
      <Content/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
