import "./App.css";
import NavBar from "../../components/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import { HashRouter, Outlet, Route } from "react-router-dom";
import Posts from "../posts/Posts";

function App({ component }) {
  return (
    <div className="App">
      <Helmet>
        <title>The Vachan MN Blog</title>
        <meta charSet="utf-8" />
      </Helmet>
      <NavBar />
      {component}
      <Footer />
    </div>
  );
}

export default App;
