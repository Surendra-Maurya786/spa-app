import { useState } from "react";

import * as ReactBootstrap from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap';

// import {Container, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// const Clock = () => {

//   let time = new Date().toLocaleTimeString();
  
//   const [ctime,setCtime] = useState(time);
  
//   const UpdateTime = () =>{
  
//     time = new Date().toLocaleTimeString();
//     setCtime(time);
//   }
  
//   setInterval(UpdateTime,1000);
  
  
//     return (
  
//       <>
  
    
  
  
  
   
//       </>
  
  
//       );
  
//   };

const Navbar = () => {

  let time = new Date().toLocaleTimeString();
  
  const [ctime,setCtime] = useState(time);
  
  const UpdateTime = () =>{
  
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  
  setInterval(UpdateTime,1000);
  
    return ( 

        <>
   
        <ReactBootstrap.Navbar bg="dark" variant="dark">
          <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="/">SPA</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav className="me-auto">
            <ReactBootstrap.Nav.Link> <NavLink to="/">Home</NavLink></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link > <NavLink to="/about">About</NavLink></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link > <NavLink to="/contact">Contact</NavLink></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link > <NavLink to="/todo">ToDo</NavLink></ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link > <NavLink to="/wheather">Wheather</NavLink></ReactBootstrap.Nav.Link>
            <div className="ms-end">
            <h1 className="date"> {ctime} </h1>
            </div>
          </ReactBootstrap.Nav>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
       
            
      </>

     );
}
 
export default Navbar;