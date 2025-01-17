import IconHeart from '../Icons/IconHeart';
import Cardphoto from '../Sections/CardPhoto';
import React from 'react'
import Chair from '../../images/furniture/wood-chair.jpg';
import SmallTable from '../../images/furniture/small-table.jpeg';
import Stand from '../../images/furniture/stand-table.jpg';
import Furniture from '../../images/furniture/mueble.jpg';
import Mirror from '../../images/furniture/mirror.jpg';
import Lamp from '../../images/furniture/desk-lamp.jpg';

function Decoration() {
  return (
    <section>
    <div class="furniture">
          <h2>Decoración del hogar</h2>
          <div class="card-section">
            <div class="product-card">
              <div class="icon">
               <IconHeart/>
              </div>
              <div class="product-image">
               <Cardphoto photo={Chair} />
              </div>
              <h3>Silla de bambú</h3>
              <p>Disponible en 2 colores: blanco y negro.</p>
            </div>

            <div class="product-card">
              <div class="icon">
              <IconHeart/>
              </div>

              <div class="product-image">
              <Cardphoto photo={SmallTable} />
              </div>
              <h3>Banco pequeño</h3>
              <p>Ideal para agregar un toque de estilo a tus espacios.</p>
            </div>

            <div class="product-card">
              <div class="icon">
              <IconHeart/>
              </div>

              <div class="product-image">
              <Cardphoto photo={Stand} /> 
              </div>
              <h3>Buró</h3>
              <p>
                Hecho de bambú.
              </p>
            </div>

            <div class="product-card">
              <div class="icon">
              <IconHeart/>
              </div>

              <div class="product-image">
              <Cardphoto photo={Furniture} />
              </div>
              <h3>Cajonera</h3>
              <p>Hecho 100% de materiales ecológicos.</p>
              <p></p>
            </div>

            <div class="product-card">
              <div class="icon">
              <IconHeart/>
              </div>

              <div class="product-image">
              <Cardphoto photo={Mirror} />
              </div>
              <h3>Espejo de pared</h3>
              <p>Le da un toque delicado a tus espacios</p>
            </div>

            <div class="product-card">
              <div class="icon">
              <IconHeart/>
              </div>

              <div class="product-image">
              <Cardphoto photo={Lamp} />
              </div>
              <h3>Lámpara bambú</h3>
              <p>Minimalista y elegante.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Decoration