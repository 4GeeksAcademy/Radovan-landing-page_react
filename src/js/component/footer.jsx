import React from "react";

let foot = {
    color: 'white',
    fontSize: '14px'
}
const Footer = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
      <div className="container-fluid row justify-content-center">
      <p className="col-4 text-center m-auto" style={foot}>Copyright © Your Website 2023</p>
      </div>
      </nav>)}

export { Footer }