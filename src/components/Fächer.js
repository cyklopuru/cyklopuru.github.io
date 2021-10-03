import React from 'react'
import Isometric from './fächer/Isometric'

export const Fächer = () => {
    return (
        <div className="fächerliste">
        <button className="fächer" onClick="">Software</button>
        <button className="fächer" onClick="">Elektrotechnik</button>
        <button className="fächer" onClick="">Betriebssysteme</button>
        <button className="fächer" onClick="'">Datenbanken</button>
        <button className="fächer" onClick="">Webtechnologien</button>
        <button className="fächer" onClick="">Medien</button>
        <button className="fächer" onClick="">Mathe</button>
        <button className="fächer" onClick={Isometric}>Isometric Games</button>
        <button className="fächer" onClick="">Git</button>
      </div>
      
    )
    
}
export default Fächer