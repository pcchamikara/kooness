import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header'
import Art from '../screens/Art';
import Artist from '../screens/Artist';
import Artists from '../screens/Artists';
import Albums from '../screens/Albums';
import Album from '../screens/Album';
import AlbumArt from '../screens/AlbumArt';
import Shows from '../screens/Shows';
import Show from '../screens/Show';
/* import MainContextprovider from './MainContext'; */

function App(props) {
  return (
    <BrowserRouter>
     
      <div className="mainContent">
        <Route exact path="/artist/:artistId" component={Artist} />
        <Route path="/artist/:artistId/:artItemId" component={Art} />
        <Route exact path="/" component={Artists} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/album/:albumId" component={Album} />
        <Route path="/album/:albumId/:albumItemId" component={AlbumArt} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/shows/:showAId" component={Show} />
      </div>
    </BrowserRouter>
  );
}

export default App;
