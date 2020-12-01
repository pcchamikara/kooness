import React, { createContext, useState } from 'react';
import AtristsData from '../AtristsData';
//import AlbumsData from '../albums';

export const MainContext = createContext();
const TempArts = '' ;
const TempAlbums = '' ;

const MainContextprovider = (props) =>{
    console.log(AtristsData);
    //const {AtristsData, setAtristsData} = useState(AtristsData);
   // const [Albums, setAlbums] = useState(AlbumsData);
   
   
    
 /*    const getArtworks = (slug) => {
       
        let TempArtist = [...Atrists];
        const Artist = TempArtist.find(artist => artist.slug === slug );
        return Artist;
    } */

 /*    const getAlbums = (slug) => {
       
        let TempArtist = [...Albums];
        const Albums = TempAlbums.find(albums => albums.slug === slug );
        return Albums;
    } */

    
    return(
        <MainContext.Provider value={{} }>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextprovider;

