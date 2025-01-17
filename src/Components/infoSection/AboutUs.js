import React from 'react';
import CardPhoto from '../Sections/CardPhoto';
import Earth from '../../images/earth.png';
import Ecology from '../../images/ecology.png';

function AboutUs() {
  return (
    <div class="about-us">
                        <h2>¿Por qué nosotros?</h2>
                        <div class="mission-section">
                            <div class="earth">
                                <CardPhoto photo={Earth}/>
                                <p>
                                    Compromiso con el medio ambiente garantizando
                                    el uso de materiales 100% reciclables.
                                </p>
                            </div>
                            <div class="innovation">
                            <CardPhoto photo={Ecology}/>
                                <p>
                                    Innovando con estilo
                                    el diseño de nuestros
                                    muebles es único.
                                </p>
                            </div>
                        </div>
                    </div>
  )
}

export default AboutUs;