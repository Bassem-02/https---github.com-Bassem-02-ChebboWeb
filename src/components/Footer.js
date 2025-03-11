import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg py-4 text-center">
      <div className="container">
        {/* Icônes Réseaux Sociaux */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="#" className="text-dark hover-opacity">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-dark hover-opacity">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-dark hover-opacity">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-dark hover-opacity">
            <Linkedin size={24} />
          </a>
        </div>

        {/* Liens Footer */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
          <a href="#" className="text-secondary text-decoration-none">
            About
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Contact
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Privacy Policy
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <p className="text-muted small mb-0">
          © {new Date().getFullYear()} Cheebo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


