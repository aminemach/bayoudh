import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import Header from './layouts/Header';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import InteriorDesign from './pages/InteriorDesign';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color='0, 0, 0'
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            '.nav-link',
            '.masonry-item'
          ]}
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/interior-design" element={<InteriorDesign />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
