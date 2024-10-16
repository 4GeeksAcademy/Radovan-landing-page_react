import React from "react";

const Navbar = () => {
return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid fixed-top">
  <div className="container-fluid row justify-content-between">
  <a className="navbar-brand col-4">TOLKIEN SITE</a>
    <button className="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>    
    <div className="collapse navbar-collapse col-4 justify-content-end" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
      <li className="nav-item"><a className="nav-link" href="#">About</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
)}
export { Navbar }