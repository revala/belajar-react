// import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import BestGame from './components/BestGame';
import TrendingGame from './components/TrendingGame';
import Contact from './components/Contact';
import Footer from './components/Footer';

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
      <NavigationBar />
      <Intro />
    </div>

    <div className="trending">
      <TrendingGame />
    </div>

    <div className="best">
      <BestGame />
    </div>

    <div className="contact">
      <Contact />
    </div>

    <div className="footer">
      <Footer />
    </div>
    </div>
    
    
  );
}

export default App;
