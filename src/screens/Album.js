import React from 'react'
import AlbumsData from "../AlbumsData";
import { Link , useRouteMatch } from "react-router-dom";
import { useParams } from "react-router";
import SubHeader from '../components/SubHeader';

export default function Album() {
    const { albumId } = useParams();
    let { path, url } = useRouteMatch();
    const albumItem = AlbumsData.find(({ slug }) => slug === albumId);

        return (

        <div className="col-12">
            <SubHeader/>
            <h5 className="text-center text-white text-uppercase mb-0">{albumItem.albumName}</h5>
        <div className="row bg-dark p-2">
            
            {albumItem.arts.map(({ artTitle, slug, artId, artImg, artDescription }) => (
            <div key={artId} className="art_block col-sm-6 col-md-4 mb-3 p-2" >
                <Link to={`${url}/${artId}`}>

                <div className="card bg-dark text-white">
                    <div className="at_img" style={{backgroundImage: `url(${artImg})`}}/>
                    <div className="card-body">
                    <h6 className="card-title text-uppercase">{artTitle}</h6>
                   
                    </div>
                </div> 


                </Link>
            </div>
            ))}
        
        
        </div>
        </div>
    )
}
