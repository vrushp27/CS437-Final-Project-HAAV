import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import LiveFeed from './Components/LiveFeed';
import History from './Components/History';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import About from './Components/About'



function App() {
  return (
    <Router>
      <div class="flex flex-col h-screen justify-between">
        <Header />
          <Routes>
          <Route exact path = '/' element = {<Home />} />
          <Route exact path = '/livefeed' element = {<LiveFeed />} />
          <Route exact path = '/history' element = {<History />}/>
          <Route exact path = '/about' element = {<About />}/>
          </Routes>
          <Footer />
        </ div>
        </Router>

  );
}

export default App;
