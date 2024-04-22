import React from 'react';
import './App.css';
import './LandingPage.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Image1 from './assets/1.jpg';
import Image2 from './assets/2.jpg';
import Image3 from './assets/3.jpg';
import Image4 from './assets/4.jpg';
import Image5 from './assets/5.jpg';

function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="text-white mt-5"> 
        <h2>Highlights</h2>
        <div className="row no-gutters">
          <div className="col-12 d-flex justify-content-between mt-3 highlight-row">
            <div className="highlight-item text-center" style={{ flex: '1' }}>
              <img src={Image1} alt="Highlight 1" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '400px' }} />
              <p>Text below Highlight 1</p>
            </div>
            <div className="highlight-item text-center" style={{ flex: '1' }}>
              <img src={Image2} alt="Highlight 2" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '400px' }} />
              <p>Text below Highlight 2</p>
            </div>
            <div className="highlight-item text-center" style={{ flex: '1' }}>
              <img src={Image3} alt="Highlight 3" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '400px' }} />
              <p>Text below Highlight 3</p>
            </div>
            <div className="highlight-item text-center" style={{ flex: '1' }}>
              <img src={Image4} alt="Highlight 4" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '400px' }} />
              <p>Text below Highlight 4</p>
            </div>
            <div className="highlight-item text-center" style={{ flex: '1' }}>
              <img src={Image5} alt="Highlight 5" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '400px' }} />
              <p>Text below Highlight 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
