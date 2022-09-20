import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => ({
            color: isActive ? "cyan" : "white",
            textDecoration: "none",
          })}
          end
      >
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        className="about"
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "cyan" : "white",
          textDecoration: "none",
        })}
      >
        About
      </NavLink>{" "}
      |{" "}
      <NavLink
        className="qrgen"
        to="/qrgen"
        style={({ isActive }) => ({
          color: isActive ? "cyan" : "white",
          textDecoration: "none",
        })}
      >
        QR Genrator
      </NavLink>
    </div>
  );
};

export default Navbar;
