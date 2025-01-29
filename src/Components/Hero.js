import React from 'react'
import imageFest from '../images/main-2.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <article>
    <div class="impact-section">
      <h1>Impacto Ecologico</h1>
      <p>En Eco-store creemos en la importancia de reducir el impacto ambiental, por ello elaboramos nuestros productos de manera artesanal, utilizando materiales ecológicos que contribuyen al cuidado y conservación del planeta.</p>
      <Link className='button-link' to="/KnowMore">Conoce más</Link>
    </div><div class="image-section">
        <img src={imageFest} alt="" />
      </div>
      </article>
  )
}

export default Hero;