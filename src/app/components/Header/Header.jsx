import React from "react";

import { Container, HeaderRow, HeaderColumn } from "./Header.styled";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a
              style={{
                borderLeft: "1px solid #cccccc",
              }}
              href="/"
            >
              Home
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
