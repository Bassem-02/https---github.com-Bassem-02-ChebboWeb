
import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Moon, Sun, User, Home, Menu, PawPrint, Store, Stethoscope } from "lucide-react";

export default function NavigationBar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar expand="md" fixed="top" bg="light" variant="light" className="shadow custum-navbar" >
      <Container className="d-flex justify-content-between">
        <Button variant="link" className="text-dark">
          <User size={24} />
        </Button>

        <div className="position-relative">
          <Button
            variant="link"
            className="text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </Button>

          {isMenuOpen && (
            <div className="position-absolute bg-light shadow rounded p-2" style={{ top: "40px", left: "50%", transform: "translateX(-50%)", zIndex: 1000 }}>
              <Nav className="d-flex gap-3">
                <Nav.Link href="#"><Home size={24} className="text-dark" /></Nav.Link>
                <Nav.Link href="#"><PawPrint size={24} className="text-dark" /></Nav.Link>
                <Nav.Link href="#"><Store size={24} className="text-dark" /></Nav.Link>
                <Nav.Link href="#"><Stethoscope size={24} className="text-dark" /></Nav.Link>
              </Nav>
            </div>
          )}
        </div>

        <Button
          variant="outline-secondary"
          className="rounded-circle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={24} className="text-warning" /> : <Moon size={24} />}
        </Button>
      </Container>
    </Navbar>
  );
}

