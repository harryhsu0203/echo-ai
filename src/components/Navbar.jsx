import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "首頁", to: "/" },
  { label: "服務", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <nav className="container navbar">
        <Link to="/" className="brand">
          <span className="brand-dot" />
          Echo AI
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
