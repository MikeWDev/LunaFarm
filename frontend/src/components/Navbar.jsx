import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          Luna <span>Farm</span>
        </li>
        <li>
          <Button text="Logout" type="primary" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
