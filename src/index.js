import React from 'react';
import ReactDOM from 'react-dom';
import logo from './tonycre8.png'
import './index.css'
import Slide from './animations/slide'
import Fade from './animations/fade'
import Bounce from './animations/bounce'

function App() {
  return (
    <div className="page">
      <div className="logo">
        Made by
        <span style={{color: "#00acee"}}>&nbsp;@TONYCRE8</span><img src={logo}/>
      </div>
      <div>
        <h1 className="title" style={{marginTop: "30px", textTransform: "uppercase"}}>Animation testing</h1>
        <hr></hr>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridColumnGap: "15px"
      }}>
        <div className="section">
          <h2 className="title">Bounces</h2>
          <Bounce direction="up" delay={500}>
            <div className="animation bounce"><span className="highlight">Bounce</span> up</div>
          </Bounce>
          <Bounce direction="down" delay={1000}>
            <div className="animation bounce"><span className="highlight">Bounce</span> down</div>
          </Bounce>
          <Bounce direction="right" delay={1500}>
            <div className="animation bounce"><span className="highlight">Bounce</span> right</div>
          </Bounce>
          <Bounce direction="left" delay={2000}>
            <div className="animation bounce"><span className="highlight">Bounce</span> left</div>
          </Bounce>
        </div>
      </div>
    </div>  
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

{/* <div className="section">
          <h2 className="title">Slides</h2>
          <Slide direction="up" delay={500}>
            <div className="animation slide"><span className="highlight">Slide</span> up</div>
          </Slide>
          <Slide direction="down" delay={1000}>
            <div className="animation slide"><span className="highlight">Slide</span> down</div>
          </Slide>
          <Slide direction="right" delay={1500}>
            <div className="animation slide"><span className="highlight">Slide</span> right</div>
          </Slide>
          <Slide direction="left" delay={2000}>
            <div className="animation slide"><span className="highlight">Slide</span> left</div>
          </Slide>
        </div>
        <div className="section">
          <h2 className="title">Fades</h2>
          <Fade direction="up" delay={500} duration={2000}>
            <div className="animation fade"><span className="highlight">Fade</span> up</div>
          </Fade>
          <Fade direction="down" delay={1000} duration={2000}>
            <div className="animation fade"><span className="highlight">Fade</span> down</div>
          </Fade>
          <Fade direction="right" delay={1500} duration={2000}>
            <div className="animation fade"><span className="highlight">Fade</span> right</div>
          </Fade>
          <Fade direction="left" delay={2000} duration={2000}>
            <div className="animation fade"><span className="highlight">Fade</span> left</div>
          </Fade>
        </div>
      */}