import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      variant="dark"
      style={{ backgroundColor: "#800080" }}
    >
      <Container fluid>
        <Link className="navbar-brand" to={""}>
          The Vachan MN Blog
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to={""}>
              Home
            </Link>
            <Link className="nav-link" to={"about"}>
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
