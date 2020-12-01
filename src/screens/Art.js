import React from 'react'
import AtristsData from "../AtristsData";
import { useParams } from "react-router";
import SubHeader from '../components/SubHeader';
import { BsChevronUp } from 'react-icons/bs';

export default function Art() {
    const { artistId, artItemId } = useParams();
    console.log(artItemId);
    const artItem =  AtristsData.find(({ slug }) => slug === artistId).arts.find(({artId}) => artId === 1);
 
    return (
        <div className="col-12">
            <SubHeader/>
        <div className="row bg-dark p-2 justify-content-center align-items-center">
            <div className="ko-art-weapper d-flex flex-column justify-content-center align-items-center">
                <div className="ko-art-img">
                    <img src={artItem.artImg} width="100%" height="auto"/>
                </div>
                <div className="ko-art-description">


                    <h3 className='ko-art-title'>{artItem.artTitle}</h3>    
                    <div dangerouslySetInnerHTML={ {__html: artItem.artDescription} } />
                    <div dangerouslySetInnerHTML={ {__html: artItem.artMoreDescription} } />
                    <span class="ko-read-more"><BsChevronUp/></span>
                    
                </div>
            </div>


            {/* <a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=<img src=https://images.freeimages.com/images/small-previews/950/serious-grasshopper-1-1056340.jpg>">Email Us</a> */}
            
        </div>
        </div>
    )
}
