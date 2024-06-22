import Listing from "./Listing";
import etsyJson from "../data/etsy.json";
import "./App.css";

function App() {
  return (
    <>
      <Listing items={etsyJson} />
    </>
  );
}

export default App;
