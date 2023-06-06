import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((imageUrl: string, index: string) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="w-full h-full rounded select-none"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
