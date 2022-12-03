import "./App.css";
import Nav from "./Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import SectionHeader from "./Components/SectionHeader";
import Cartbtn from "./Components/Cartbtn";
import Accordion from "./Components/Accordion";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="card-section pt-5"  style={{position:"relative"}}>
        <SectionHeader name="Special Offer" title="View All"/>
        <Card />
        <Cartbtn/>
      </div>
      <Accordion/>
    </div>
  );
}

export default App;
