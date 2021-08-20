import "./App.scss";
import Head from "../head";
import CityCard from "../cityCards";
import MapComponent from "../map";

function App() {
  return (
    <div className="App">
      <Head />
      <MapComponent />
      <CityCard />
    </div>
  );
}

export default App;
