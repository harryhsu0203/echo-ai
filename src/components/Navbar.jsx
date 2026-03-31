import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import EchoLogo from "./EchoLogo";

const navItems = [
  { label: "首頁", to: "/" },
  { label: "服務", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="container navbar">
        <Link to="/" className="brand">
          <EchoLogo mode="full" />
        </Link>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="切換選單"
        >
          ☰
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://echochat.com.tw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-small"
            onClick={() => setOpen(false)}
          >
            EchoChat
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
