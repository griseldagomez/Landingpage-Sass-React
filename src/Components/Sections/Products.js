import React from 'react';
import IconHeart from '../Icons/IconHeart';
import Brush from '../../images/products/toothbrush.jpg';
import Cream from '../../images/products/hand-cream.jpeg';
import Serum from '../../images/products/serum.jpg';
import Kit from '../../images/products/organic-kit.jpg';
import Soap from '../../images/products/organic-soap.jpg';
import Guasha from '../../images/products/guasha-kit.jpg';
import CardPhoto from './CardPhoto';

function Products() {
  return (
    <section class="product-section">
    <div class="healthcare">
        <h2>Cuidado de la salud</h2>
        <div class="card-section">
            <div class="product-card">
                <div class="icon">
                  <IconHeart/>
                </div>
                <CardPhoto photo={Brush} />
                <h3>Cepillo de bambú</h3>
                <p>paquete de 2 unidades hecho 100% de materiales ecológicos</p>
            </div>
            <div class="product-card">
                <div class="icon">
                   <IconHeart/>
                </div>

                <h3>Crema para manos</h3>
                <p> Crema Hidratante cop eucalipto ayuda al cuidado de la piel</p>
            </div>
            <div class="product-card">
                <div class="icon">
                <IconHeart/>
                </div>

               
                <h3>Serum hidratante</h3>
                <p>Serúm hecho a base de extractos naturales y ácido hialuronico</p>
            </div>
            <div class="product-card">
                <div class="icon">
                <IconHeart/>
                </div>

             
                <h3>Kit de viaje</h3>
                <p>Incluye peine y cepillo de bambú, jabón organico de eucalipto y un shampoo tamaño de viae.</p>
            </div>
            <div class="product-card">
                <div class="icon">
                <IconHeart/>
                </div>

                <h3>Paquete de 2 unidades jabón de carbon  activado con coco</h3>
                <p>paquete de dos unidades.</p>
            </div>
            <div class="product-card">
                <div class="icon">
                <IconHeart/>
                </div>

              
                <h3>Kit de Skincare</h3>
                <p>Incluye 2 rodillos y una guasha.</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Products;