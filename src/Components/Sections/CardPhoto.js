import React from 'react';

function CardPhoto({ photo }) {
  return (
        <div class="product-image">
          <img
              src={photo}
              alt="" />
      </div>
  )
}

export default CardPhoto;