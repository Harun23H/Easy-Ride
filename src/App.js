import "./App.css";
import "./components/nav/nav.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import "./components/header/header.css";
import { SectionTwo } from "./components/section-two/SectionTwo";
import "./components/section-two/sectionTwo.css";
import GetApp from "./components/getApp/GetApp";
import "./components/getApp/getApp.css"
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <SectionTwo />
      <GetApp />
    </div>
  );
}

export default App;
