import React, { useState } from 'react'
import './Gallery.css'

function Gallery({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div style={{ position: 'relative', width: '300px', margin: 'auto'}}>
      <button onClick={prevImage} style={{ position: 'absolute', top: '50%', left: '10px', display: currentIndex === 0 ? "none" : "block"}}>
        {'<'}
      </button>
      <div>
        <img
          src={children[currentIndex]}
          alt={`gallery-${currentIndex}`}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        </div>
      <button onClick={nextImage} style={{ position: 'absolute', top: '50%', right: '10px', display: currentIndex === children.length - 1 ? "none" : "block"}}>
        {'>'}
      </button>

    </div>
    )
}

export default Gallery
