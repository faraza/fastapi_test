import React, { useState, useEffect } from 'react';

const ImageViewer = ({ imageUrl }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(imageUrl);
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageSrc(imageObjectURL);
      } catch (e) {
        console.error('Error fetching image:', e);
      }
    };
    
    fetchImage();
    
    // Optional: Revoke object URL on cleanup to free memory
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [imageUrl]);

  return (
    <div>
      {imageSrc ? <img src={imageSrc} alt="Dynamic" /> : <p>Loading...</p>}
    </div>
  );
};

export default ImageViewer;
