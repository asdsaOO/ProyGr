import React from 'react';
import Image from 'react-bootstrap/Image';

function ImageComponent({ src, height, width }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Image
        src={src}
        fluid
        style={{ objectFit: 'contain', width, height }}
      />
    </div>
  );
}

export { ImageComponent };
