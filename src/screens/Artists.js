import React , {useContext} from 'react';
import AtristsData from "../AtristsData";
import { Link } from "react-router-dom";
import Header from '../components/Header';
/* import {MainContext} from  '../components/MainContext'; */


export default function Artists() {
    
    return (
        <div className="col-12">
             <div>
            { <Header />}
            </div>
        <div className="row bg-dark p-2">
            
            {AtristsData.map(({ artistName, slug, artistId, artistImage, artworks }) => (
            <div key={artistId} className="art_block col-sm-6 col-md-4 mb-3 p-2" >
                <Link to={`/artist/${slug}`}>

                <div className="card bg-dark text-white">
                    <div className="at_img" style={{backgroundImage: `url(${artistImage})`}}/>
                    <div className="card-body">
                    <h6 className="card-title text-uppercase">{artistName}</h6>
                    <small className="text-muted">{artworks} Artworks</small>
                    </div>
                </div> 


                </Link>
            </div>
            ))}
        
        
        </div>
        </div>
    )
}
