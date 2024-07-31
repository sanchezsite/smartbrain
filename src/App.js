
import './App.css';
import Nav from './components/Navigation/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg';
import React, { useState, useEffect } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


// const stub = ClarifaiStub.grpc()
// const metadata = new grpc.Metadata();
// metadata.set("authorization", "Key" + "6fc70404918a439da0660c63515114d6") 

const returnClarifaiJSON = (imageUrl) => {
  const PAT = '6fc70404918a439da0660c63515114d6';
  const USER_ID = 'halden';       
  const APP_ID = 'smartbrain';    
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
  },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

return requestOptions


}

function App() {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [user, setUser] = useState('')
  const [box, setBox] = useState('')

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].regions_info.bounding_box;
    const image = document.getElementById('input')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width,height)
     return {
      leftCol: clarifaiFace.left_col,
      topRow: clarifaiFace.top_row,
      rightCol: clarifaiFace.right_col,
      bottomRow: clarifaiFace.bottom_row
    }
  }

  const onButtonSubmit = () => {
    setImageUrl(input);
    fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs", returnClarifaiJSON(input))
    .then(response => response.json())
    .then(response => calculateFaceLocation(response))
    .catch(err => console.log(err))
      /* {
      console.log('hi', response)
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id:
          })
        })
      }} */
  }
  return (
    <div className="App">
      <ParticlesBg type="thick" bg={true} />
      <Nav />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={onInputChange} 
      onButtonSubmit={onButtonSubmit}/>
      <FaceRecognition imageUrl={imageUrl}/>
    </div>
  );
}

export default App;
