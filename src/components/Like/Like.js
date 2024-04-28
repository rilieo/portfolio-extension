import React, { useState } from 'react';
import './Like.css';

import { filled_heart, empty_heart } from '../../assets';

function LikeButton() {
    const [isToggled, setIsToggled] = useState(false); // State for each individual image

    const handleToggle = () => {
      setIsToggled(prevState => !prevState); // Toggle the state when clicked
    };

    return (
        <div className='like-bar'>
            <img
                className="heart-img"
                src={isToggled ? filled_heart : empty_heart}
                alt='heart'
                onClick={handleToggle}
            />
        </div>
    );
  }

export default LikeButton