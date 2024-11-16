import React from 'react';
import Image from 'react-bootstrap/Image';

function CarouselImageComp({ text ,src}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Image
        src={src}
        alt={text}
        fluid
        style={{ objectFit: 'contain', width: '200px', height: '100px' }}
      />
    </div>
  );
}

export { CarouselImageComp };