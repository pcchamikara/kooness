import React , {useContext} from 'react';
import AlbumsData from "../AlbumsData";
import { Link } from "react-router-dom";
import Header from '../components/Header';
/* import {MainContext} from  '../components/MainContext'; */


export default function Albums() {
    
    return (
        <div className="col-12">
             <div>
            { <Header />}
            </div>
        <div className="row bg-dark p-2">
            
            {AlbumsData.map(({ albumName, slug, albumId, albumImage, artworks }) => (
            <div key={albumId} className="art_block col-sm-6 col-md-4 mb-3 p-2" >
                <Link to={`/album/${slug}`}>

                <div className="card bg-dark text-white">
                    <div className="at_img" style={{backgroundImage: `url(${albumImage})`}}/>
                    <div className="card-body">
                    <h6 className="card-title text-uppercase">{albumName}</h6>
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
