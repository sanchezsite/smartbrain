import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <Tilt className='Tilt br2 shadow-1 bg-white' options={{ max: 55}} style={{ height: 150, width: 150 }}>
            <div className='Tilt-inner pa3'>
                <img src={Brain} alt="brain logo" style={{paddingTop: '5px'}}></img>
            </div>
        </Tilt>
    </div>
  )
}

export default Logo