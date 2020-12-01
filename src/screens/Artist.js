import React from 'react'
import AtristsData from "../AtristsData";
import { Link , useRouteMatch } from "react-router-dom";
import { useParams } from "react-router";
import SubHeader from '../components/SubHeader';
import ArtistArts from './ArtistArts';
import ArtistShows from './ArtistShows';

export default function Artist() {
    const { artistId } = useParams();
    let { path, url } = useRouteMatch();
    const artistItem = AtristsData.find(({ slug }) => slug === artistId);

    return (

        <div className="col-12">
            <SubHeader/>
            <h5 className="text-center text-white text-uppercase mb-0">{artistItem.artistName}</h5>
        <div className=" bg-dark p-2">

        <ul class="nav justify-content-center " id="pills-tab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active ff-ram" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Works</a>
        </li>
        <li class="nav-item">
            <a class="nav-link ff-ram" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Shows</a>
        </li>
       
        </ul>
        <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><ArtistArts/></div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><ArtistShows/></div>
        </div>
       
        
        
        </div>
        </div>
    )
}


