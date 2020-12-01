import React , {useContext} from 'react';
import ShowsData from "../ShowsData";
import { Link } from "react-router-dom";
import Header from '../components/Header';
/* import {MainContext} from  '../components/MainContext'; */


export default function Shows() {
    
    return (
        <div className="col-12">
             <div>
            { <Header />}
            </div>
        <div className="row bg-dark p-2">
            
            {ShowsData.map(({ showName, slug, showId, showImage }) => (
            <div key={showId} className="art_block col-sm-6 col-md-4 mb-3 p-2" >
                <Link to={`/shows/${slug}`}>

                <div className="card bg-dark text-white">
                    <div className="at_img" style={{backgroundImage: `url(${showImage})`}}/>
                    <div className="card-body">
                    <h6 className="card-title text-uppercase">{showName}</h6>
                 
                    </div>
                </div> 


                </Link>
            </div>
            ))}
        
        
        </div>
        </div>
    )
}
