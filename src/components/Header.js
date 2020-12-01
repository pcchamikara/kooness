import React, { useState } from "react";
import HeaderName from "./HeaderName";
import { Link , NavLink } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const responsive = isOpen && "resStyle";
  const Brand = isOpen && "show";

  return (
    <div>
         <nav className="navbar  navbar-dark d-flex bg-dark justify-content-center pt-2 pb-2">
       
       <img src="/logo_full.png" alt=""/>
         <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item  ml-2 mr-2">
                <NavLink exact={true} activeClassName='active'  to="/" className="nav-link">Artists</NavLink >
              </li>
              <li className="nav-item ml-2 mr-2">
                <NavLink  to="/albums" className="nav-link">Albums</NavLink >
              </li>
              <li className="nav-item ml-2 mr-2">
                <NavLink  to="/shows" className="nav-link">Shows</NavLink >
              </li>
            </ul>  
         </nav>
        
      
    </div>
  );
}
