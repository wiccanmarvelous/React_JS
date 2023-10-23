import { useEffect, useRef, useState } from 'react'
import * as faceapi from 'face-api.js'
import './App.css'

function App() {
  const imgRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
      ]).then(console.log('its done'))
        .catch((e) => console.log(e));
    };
    imgRef.current && loadModels();
  }, []);

  return (
    <>
      <div className="app">
        <img ref={imgRef} src="./src/assets/face.jfif" width="940" height="650" />
        <canvas width="940" height="650" />
      </div>
      <canvas ref={canvasRef} width="940" height="650" />
    </>
  )
}

export default App
