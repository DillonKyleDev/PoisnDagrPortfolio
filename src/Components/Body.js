import React from 'react';
import './css/body.css';
import DrawImages from './DrawImages';

function Body(props) {
  return (
    <div className='background-image background-cover'>
      <div id="background-darken">
        <DrawImages showAdultGallery={props.showAdultGallery} />
      </div>
    </div>
  )
}

export default Body
