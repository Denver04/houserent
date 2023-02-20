import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import "../CSS/body.css";
import "../CSS/search.css";
import "../CSS/card.css";
import "../CSS/responsive.css";

function Main() {
  return (
    <div>
        <Navbar />
        <Body />
    </div>
  )
}

export default Main