import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">
          <Content />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
