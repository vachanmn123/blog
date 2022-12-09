import "./App.css";
import NavBar from "../../components/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>The Vachan MN Blog</title>
        <meta charSet="utf-8" />
      </Helmet>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
