import NavBar from './NavBar.js'


function Header() {
  return (
    <div>
      <header className="App-header">
        <img src="skeeter_hedgie.png" className="App-logo" alt="logo" />
        <span className="header-words">
          Corgi Facts
        </span>
        <NavBar />
      </header>
    </div>
  );
}

export default Header; 