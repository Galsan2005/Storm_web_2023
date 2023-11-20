// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ImageContainer from './component/ImageContainer';

function App() {

  return (
    <div className='App'>
        <h1>Image Gallery</h1>
        <ImageContainer imgSrc="img1.avif" altText="Description of first image" containerId="image1" />
        <ImageContainer imgSrc="img2.avif" altText="Description of second image" containerId="image2" />
        <ImageContainer imgSrc="img3.avif" altText="Description of third image" containerId="image3" />
    </div>
  );
};

export default App;
