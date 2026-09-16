import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';
import VideoIntro from './components/VideoIntro';

function App() {
  return (
    <>
      <VideoIntro />

      <div className="App">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <div className="content-wrapper">
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
