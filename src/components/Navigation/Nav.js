import React from 'react'

const Nav = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end',}}>
          <p onClick={() => onRouteChange('SignOut')}  className='f3 link black underline pa3 pointer ba bg-white'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end',}}>
          <p onClick={() => onRouteChange('SignIn')}  className='f3 link black underline pa3 pointer ba bg-white'>Sign In</p>
          <p onClick={() => onRouteChange('register')}  className='f3 link black underline pa3 pointer ba bg-white'>Register</p>
        </nav>
      );
    }
}

export default Nav