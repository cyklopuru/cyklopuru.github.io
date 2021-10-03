import React from 'react'

export const Fächer = () => {
    return (
        <div className="fächerliste">
        <button className="fächer" onclick="location.href='faecher/software'">Software</button>
        <button className="fächer" onclick="location.href='faecher/elektrotechnik'">Elektrotechnik</button>
        <button className="fächer" onclick="location.href='faecher/betriebssystemenetzwerke'">Betriebssysteme</button>
        <button className="fächer" onclick="location.href='faecher/datenbanken'">Datenbanken</button>
        <button className="fächer" onclick="location.href='faecher/webtechnologien'">Webtechnologien</button>
        <button className="fächer" onclick="location.href='faecher/medien'">Medien</button>
        <button className="fächer" onclick="location.href='faecher/mathe'">Mathe</button>
        <button className="fächer" onclick="location.href='faecher/isometricgames'">Isometric Games</button>
        <button className="fächer" onclick="location.href='faecher/git'">Git</button>
      </div>
      
    )
    
}
export default Fächer