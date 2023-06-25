import React from "react";
import ReactLogo from "../public/logo.jpeg";
function Navbar() {
  return (
    <>
      <nav>
        {/* <div className = "main-left"> */}
        <img src={ReactLogo} alt="react-logo" />
        <div className = "main-center">
          <h2>Aakash Kumar Gorai</h2>
          <h2>Kalinga Institute of Technology, Bhubaneshwar</h2>
        </div>
        {/* </div> */}
        <h3>React - Project-1</h3>
      </nav>
    </>
  );
}
export default Navbar;
