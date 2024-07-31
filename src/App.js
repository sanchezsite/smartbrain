
import './App.css';
import Nav from './components/Navigation/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="thick" bg={true} />
      <Nav />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
