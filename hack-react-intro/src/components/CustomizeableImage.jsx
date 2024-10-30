import React, { useState } from 'react';

const CustomizeableImage = () => {
  // TODO: Exercise Part 1 - Create a state variable for the image URL
  // Hint: Use useState like this:
  // const [yourVariable, setYourVariable] = useState('');
  
  
  // This function will be called whenever the input field changes
  const handleInputChange = (event) => {
    // TODO: Exercise Part 2 - Update the state with the new URL
    // Hint: Use your setState function from above with event.target.value
    
  };

  return (
    <div>
      <h2>🏖️ Beach Photo Display</h2>
      
      {/* Basic input field for the URL */}
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Paste a beach photo URL here!"
      />

      {/* TODO: Exercise Part 3 - Display the image using the URL from your state */}
      {/* Hint: Use your state variable as the src */}
      {/* Hint: Your code should look like: <img src={yourVariable} /> */}
      
    </div>
  );
};

export default CustomizeableImage;














/* ------ SOLUTION BELOW! Don't peek unless you need to! 😊 ------ */




/*
SOLUTION:

import React, { useState } from 'react';

const CustomizeableImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  
  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <div>
      <h2>🏖️ Beach Photo Display</h2>
      
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Paste a beach photo URL here!"
      />

      {imageUrl && <img src={imageUrl} alt="Beach scene" />}
    </div>
  );
};

export default CustomizeableImage;
*/