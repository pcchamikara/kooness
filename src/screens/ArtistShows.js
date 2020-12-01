import React from 'react'
import AtristsData from "../AtristsData";
import { Link , useRouteMatch } from "react-router-dom";
import { useParams } from "react-router";


export default function ArtistShows() {
    const { artistId } = useParams();
    let { path, url } = useRouteMatch();
    const showlistItem = AtristsData.find(({ slug }) => slug === artistId);

        return (

        <div className="col-12">
            
        <div className="row bg-dark p-2">
            
            {showlistItem.shows.map(({ showTitle, slug, showId, showImg, showDescription }) => (
            <div key={showId} className="art_block col-sm-6 col-md-4 mb-3 p-2" >
                <Link to={`${url}/${showId}`}>

                <div className="card bg-dark text-white">
                    <div className="at_img" style={{backgroundImage: `url(${showImg})`}}/>
                    <div className="card-body">
                    <h6 className="card-title text-uppercase">{showTitle}</h6>
                   
                    </div>
                </div> 


                </Link>
            </div>
            ))}
        
        
        </div>
        </div>
    )
}
