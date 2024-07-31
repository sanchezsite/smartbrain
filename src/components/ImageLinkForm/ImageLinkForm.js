import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
        <p className='f3 white'>
            {'This Magic Brain will detect faces in your pictures'}
        </p>
        <div className='center'>
            <div className='form center pa4 br3 shadow-1'>
                <input id="Main-input" className='f4 pa2 w-70 center' type='tex' 
                onChange={onInputChange} />
                <button className='w-30 f4 grow link ph3 pv2 dib white bg-light-purple' 
                onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    </div>
  )
}

export default ImageLinkForm
