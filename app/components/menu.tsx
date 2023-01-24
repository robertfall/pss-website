import { LinkDescriptor } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import Logo from "./logo";
import styles from "./menu.css";

export default function Menu() {
  return (
    <header className="menu-header">
      <div className="menu-container">
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/about" className="menu-link">
          About
        </Link>
        <Link to="/">
          <Logo className="menu-logo" />
        </Link>
        <Link to="/contact" className="menu-link">
          Contact
        </Link>
        <Link to="/shop" className="menu-link">
          Shop
        </Link>
      </div>
    </header>
  );
}

export function links(): LinkDescriptor[] {
  return [
    {
      href: styles,
      rel: "stylesheet"
    },
  ];
}
