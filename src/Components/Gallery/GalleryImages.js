import React from 'react';
import CardPhoto from '../Sections/CardPhoto';
import GalleryOne from '../../images/gallery-1.jpg';
import GalleryTwo from '../../images/gallery-2.jpg';
import GalleryThree from '../../images/gallery-3.jpg';


function GalleryImages() {
  return (
    <div class="gallery">
                        <h2>Galería de estilos</h2>
                        <div class="gallery-images">
                           <CardPhoto photo={GalleryOne}/>
                           <CardPhoto photo={GalleryTwo}/>
                           <CardPhoto photo={GalleryThree}/>
                        </div>
                    </div>
  )
}

export default GalleryImages;