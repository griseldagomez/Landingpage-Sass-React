import React from 'react';
import CardPhoto from '../Sections/CardPhoto';
import Mapa from '../../images/map.png';

function Map() {
  return (
    <div class="location">
    <h2>Encuéntranos en</h2>
    <div class="map">
       <CardPhoto photo={Mapa}/>
    </div>
    <h3>
        Centro Mayor Centro Comercial
    </h3>
    <p>
    Larrea 336, C1030AAH, Buenos Aires, Argentina
    </p>
</div>
  )
}

export default Map;