import React from 'react'
import ShowsData from "../ShowsData";
import { Link , useRouteMatch } from "react-router-dom";
import { useParams } from "react-router";
import SubHeader from '../components/SubHeader';
import { BsChevronUp } from 'react-icons/bs';

export default function Shows() {
    const { showAId } = useParams();
    
    let { path, url } = useRouteMatch();
    const ShowsItem = ShowsData.find(({ slug }) => slug === showAId);
    console.log(ShowsItem);

    return (
        <div className="col-12">
            <SubHeader/>
        <div className="row bg-dark p-2 justify-content-center align-items-center">
            <div className="ko-art-weapper d-flex flex-column justify-content-center align-items-center">
                <div className="ko-art-img">
                    <img src={ShowsItem.showImage} width="100%" height="auto"/>
                </div>
                <div className="ko-art-description">


                    <h3 className='ko-art-title'>{ShowsItem.showName}</h3>    
                    <div dangerouslySetInnerHTML={ {__html: ShowsItem.showDescription} } />
                    <span class="ko-read-more"><BsChevronUp/></span>
                    
                </div>
            </div>


            {/* <a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=<img src=https://images.freeimages.com/images/small-previews/950/serious-grasshopper-1-1056340.jpg>">Email Us</a> */}
            
        </div>
        </div>
    )
}
