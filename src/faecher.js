import logo from './logo.svg';
import './faecher.css';

function App() {
  return (
    <>
      <div className="header">
      <h1>Cyklops Fächer Website</h1>
      </div>
      <div className="App">
        
        <header className="App-header">
          <h1>Wähle das Fach aus:</h1>
          <button class="fächer" onclick="location.href='faecher/software'">Software</button>
          <button class="fächer" onclick="location.href='faecher/elektrotechnik'">Elektrotechnik</button>
          <button class="fächer" onclick="location.href='faecher/betriebssystemenetzwerke'">Betriebssysteme</button>
          <button class="fächer" onclick="location.href='faecher/datenbanken'">Datenbanken</button>
          <button class="fächer" onclick="location.href='faecher/webtechnologien'">Webtechnologien</button>
          <button class="fächer" onclick="location.href='faecher/medien'">Medien</button>
          <button class="fächer" onclick="location.href='faecher/mathe'">Mathe</button>
          <button class="fächer" onclick="location.href='faecher/isometricgames'">Isometric Games</button>
          <button class="fächer" onclick="location.href='faecher/git'">Git</button>

        </header>
      </div>
    </>
  );
}

export default App;
