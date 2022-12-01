import "./App.css";
import Nav from "./Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="card-section pt-5">
        <Card />
      </div>
    </div>
  );
}

export default App;
