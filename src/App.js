import './App.css';
import './components/nav/nav.css'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import './components/header/header.css'
import { SectionTwo } from './components/section-two/SectionTwo';
import './components/section-two/sectionTwo.css'
function App() {
  return (
    <div className="App">
      < Nav />
      < Header />
      <SectionTwo/>
    </div>
  );
}


export default App;
