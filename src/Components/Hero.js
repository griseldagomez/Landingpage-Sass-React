import React from 'react'
import imageFest from '../images/main-2.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <article>
    <div class="impact-section">
      <h1>Impacto Ecologico</h1>
      <p>Debido al impacto ambiental siendo las acciones humanas <br /> las que modifican el ambiente, Eco-store <br /> secompromete a elaborar sus productos de manera <br /> artesanal y con materiales que favorecen al cuidado <br /> del medio ambiente.</p>
      <Link to="/saberMas">Conoce más</Link>
    </div><div class="image-section">
        <img src={imageFest} alt="" />
      </div>
      </article>
  )
}

export default Hero;