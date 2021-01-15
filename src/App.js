import logo from './gear.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Timofej Jermolaev</h1>
        <p>Renegade Program, working on a decentralized future.</p>
        <span className="App-link">
          <div className="links">
            <a
              className="fa fa-instagram"
              href="https://www.instagram.com/timofeji/"
            ></a>
            <a
              className="fa fa-linkedin-square"
              href="https://www.linkedin.com/in/tim-jermolaev-213409137/"
            ></a>
            <a
              className="fa fa-twitter-square"
              href="https://twitter.com/timofejii"
            ></a>
            <a
              className="fa fa-envelope"
              href="mailto:webmaster@tim@drop.software"
            ></a>
          </div>
        </span>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        send me ur eths lol:
        <span className="eths">0x73e858aE72bd2B1Fa7EDfe91d277309A6467b944</span>
        <div></div>
      </header>
    </div>
  );
}

export default App;
