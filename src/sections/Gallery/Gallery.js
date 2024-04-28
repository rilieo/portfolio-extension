import React, { useState } from 'react'

import LikeButton from '../../components/Like/Like';

function Gallery({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggled, setToggled] = useState(false);

  const nextImage = () => {
    setToggled(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div style={{ position: 'relative', marginBottom: '10px', width: '500px', margin: 'auto'}}>
      <button onClick={prevImage} 
              style={{  position: 'absolute', 
                        top: '50%', 
                        left: '10px', 
                        width: '10%',
                        fontSize: "40px", 
                        display: currentIndex === 0 ? "none" : "block",
                        backgroundColor: 'transparent',
                        color: 'white',
                        cursor: 'pointer',
                        borderColor: 'white',
                        borderRadius: '50%',
                      }}>
      {`<`}
      </button>
      <div>
        <LikeButton />
        <img
          src={children[currentIndex]}
          alt={`gallery-${currentIndex}`}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </div>
      <button onClick={nextImage} 
              style={{  position: 'absolute', 
                        top: '50%', 
                        right: '10px', 
                        width: '10%',
                        fontSize: "40px", 
                        display: currentIndex === children.length - 1 ? "none" : "block",
                        backgroundColor: 'transparent',
                        color: 'white',
                        cursor: 'pointer',
                        borderColor: 'white',
                        borderRadius: '50%',
                      }}>
      {`>`}
      </button>

    </div>
    )
}

export default Gallery
