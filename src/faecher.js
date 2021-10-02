import logo from './logo.svg';
import './faecher.css';

function App() {
  return (
    <>

      <div className="App">
        <h1>Wähle das Fach aus</h1>
        <header className="App-header">
          <button class="fächer" onclick="location.href='faecher/software'">Software</button>
          <button class="fächer" onclick="location.href='faecher/elektrotechnik'">Elektrotechnik</button>
          <button class="fächer" onclick="location.href='faecher/betriebssystemenetzwerke'">Betriebssysteme/Netzwerke</button>
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
