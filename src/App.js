// import logo from './logo.svg';
import "./App.css";
import Crossfade from "react-crossfade-responsive";

function App() {
  const images = [
    "https://images.unsplash.com/photo-1616546311580-e191d49fa0b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80",
    "https://images.unsplash.com/photo-1611095564985-89765398121e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1615734028948-e377fd7688c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={{ width: "500px", height: "500px", margin: "0 auto" }}>
        <Crossfade
          images={images}
          interval="4000"
          transition="2000"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
