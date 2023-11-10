import "./App.css";
import Home from "./pages/HomePage"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
       <Helmet>
                <meta charSet="utf-8" />
                <title>El Conchalito</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Home />
       <About />
       <Contact />
      <Footer />
    </div>
  );
}

export default App;