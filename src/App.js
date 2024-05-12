import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import { SectionTwo } from "./components/section-two/SectionTwo";
import { Benefit } from "./components/benefit/Benefit";
import GetApp from "./components/appDownloader/GetApp";
import Newletters from "./components/newletters/Newletters";
import HireD from "./components/hireD/HireD";


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <SectionTwo />
      <GetApp />
      <Benefit/>
      <Newletters />
      <HireD />
    </div>
  );
}

export default App;
