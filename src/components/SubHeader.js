import React from 'react';
import HeaderName from "./HeaderName";
import { Link , NavLink, useHistory } from "react-router-dom";
import { MdEmail } from 'react-icons/md';
import { BsChevronLeft } from 'react-icons/bs';



export default function SubHeader() {

const history = useHistory()
    
 


    return (
        <div>
             <div>
                <nav className="navbar sub-navbar navbar-dark d-flex bg-dark justify-content-center pt-2 pb-2">
                <ul className="navbar-nav d-flex flex-row text-white">
                    

                    <li> <BsChevronLeft  onClick={() => {
                        history.goBack();
                    }} /> </li>  
                    <li className="nav-item ml-2 mr-2">
                    <MdEmail />
                    </li>
                   
                    </ul>  
                </nav>
                
            
            </div> 
        </div>
    )
}
