import Header from './Components/Header';
import Hero from './Components/Hero';
import IconHeart from './Components/Icons/IconHeart';
import IconShopping from './Components/Icons/IconShopping';
import IconUser from './Components/Icons/IconUser';
import Products from './Components/Sections/Products';
import CardPhoto  from './Components/Sections/CardPhoto';
// import Muebles from './Components/Sections/muebles';


function App() {
    return (
        <>
            <nav>  <Header/>
            <div class="icons">
                <button class="profile">
                        <IconUser />
                 </button>
                 <button class="wishlists">
                        <IconHeart />
                </button>

                    <button class="cart">
                        <IconShopping />
                    </button></div>
            </nav>
          
            <main class="main-section">
                <Hero/>
                <Products/>
                <CardPhoto/>
              
                    

                    <div class="furniture">
                        <h2>Decoración del hogar</h2>

                        <div class="card-section">
                            <div class="product-card">
                                <div class="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div class="product-image">
                                    <img src="./asset/img-20250107T193555Z-001/img/furniture/wood-chair.jpg" alt="" />
                                </div>
                                <h3>Silla de bambú</h3>
                                <p>Disponilbe en 2 colores: blanco y negro, acabado de bambú. </p>
                            </div>

                            <div class="product-card">
                                <div class="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div class="product-image">
                                    <img src="./asset/img-20250107T193555Z-001/img/furniture/small-table.jpeg" alt="" />
                                </div>
                                <h3>Banco pequeño</h3>
                                <p>Ideal para agregar un toque de estilo a tus espacios.</p>
                            </div>

                            <div class="product-card">
                                <div class="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div class="product-image">
                                    <img src="./asset/img-20250107T193555Z-001/img/furniture/stand-table.jpg" alt="" />
                                </div>
                                <h3>Buró</h3>
                                <p>Elaborado con bambú, cuenta con 2 compartimentos para guardar cosas</p>
                            </div>

                            <div class="product-card">
                                <div class="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div class="product-image">
                                    <img src="./asset/img-20250107T193555Z-001/img/furniture/mueble.jpg" alt="" />
                                </div>
                                <h3>Cajonera</h3>
                                <p>Paquete de 2 unidades hecho 100% de materiales ecológicos.</p>
                            </div>

                            <div class="product-card">
                                <div class="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div class="product-image">
                                    <img src="./asset/img-20250107T193555Z-001/img/furniture/mirror.jpg" alt="" />
                                </div>
                                <h3>Espejo de pared</h3>
                                <p>Paquete de 2 unidades hecho 100% de materiales ecológicos.</p>
                            </div>

                            <div class="product-card">
                                <div class="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div class="product-image">
                                    <img src="./asset/img-20250107T193555Z-001/img/furniture/desk-lamp.jpg" alt="" />
                                </div>
                                <h3>Lámpara bambú</h3>
                                <p>Paquete de 2 unidades hecho 100% de materiales ecológicos</p>
                            </div>
                        </div>
                    </div>


                <section class="info-section">
                    <div class="about-us">
                        <h2>¿Por qué nosotros?</h2>
                        <div class="mission-section">
                            <div class="earth">
                                <img src="./asset/img-20250107T193555Z-001/img/earth.png" alt="" />
                                <p>
                                    Compromiso con el medio ambiente garantizando
                                    el uso de materiales 100% reciclables.
                                </p>
                            </div>
                            <div class="innovation">
                                <img src="./asset/img-20250107T193555Z-001/img/ecology.png" alt="" />
                                <p>
                                    Innovando con estilo
                                    el diseño de nuestros
                                    muebles es único.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="gallery">
                        <h2>Galería de estilos</h2>
                        <div class="gallery-images">
                            <img src="./asset/img-20250107T193555Z-001/img/gallery-1.jpg" alt="" />
                            <img src="./asset/img-20250107T193555Z-001/img/gallery-2.jpg" alt="" />
                            <img src="./asset/img-20250107T193555Z-001/img/gallery-3.jpg" alt="" />
                        </div>
                    </div>
                    <div class="location">
                        <h2>Encuéntranos en</h2>
                        <div class="map">
                            <img src="./asset/img-20250107T193555Z-001/img/map.png" alt="" />
                        </div>
                        <h3>
                            Centro Mayor Centro Comercial
                        </h3>
                        <p>
                            Cl. 38A Sur #34d-51, Bogotá, Colombia
                        </p>
                    </div>
                </section>
            </main>
            <footer>
                <h3>Eco-store</h3>
                <p>Careers</p>
                <p>Terms and conditions</p>
                <p>Eco-store inc</p>
                <p>Terms and conditions</p>
                <p>Eco-store inc</p>
                <div class="social-media">
                    <img src="./asset/img-20250107T193555Z-001/img/instagram-logo.png" alt="" />
                    <img src="./asset/img-20250107T193555Z-001/img/twitter-logo.png" alt="" />
                    <img src="./asset/img-20250107T193555Z-001/img/facebook-logo.png" alt="" />
                </div>
            </footer>
        </>

    );
}

export default App;
