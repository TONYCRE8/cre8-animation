import React from 'react';
import ReactDOM from 'react-dom';
import logo from './tonycre8.png'
import './index.css'
import Slide from './animations/slide'
import Fade from './animations/fade'
import Bounce from './animations/bounce'
import Float from './animations/float'

function App() {
  return (
    <div className="page">
      <div>
        <Slide direction="down" delay={800}>
          <div className="logo">
            Made by
            <span style={{color: "#00acee"}}>&nbsp;@TONYCRE8</span><img src={logo}/>
          </div>
        </Slide>
      </div>
      <div>
        <Bounce direction="down" duration={800}>
          <h1 className="title" style={{marginTop: "50px"}}>Welcome! This is <code>cre8-animate</code>!</h1>
        </Bounce>
        <Fade direction="right" duration={1200} delay={1800}>
          <p className="subhead">A lovely amalgamation of CSS and React to form an efficient component animator and transitioner.</p>
        </Fade>
      </div>
      <div>
        <Fade direction="up" delay={3000}>
          <Float duration={2000}>
            <h2 className="arrow">▶</h2>
          </Float>
        </Fade>
      </div>
      <div style={{
        marginTop: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column wrap"
      }}>
        <h1>Here's some transitions!</h1>
        <div className="section">
          <h2 className="title">Slides</h2>
          <Slide direction="up">
            <div className="animation slide"><span className="highlight">Slide</span> up</div>
          </Slide>
          <Slide direction="down" delay={200}>
            <div className="animation slide"><span className="highlight">Slide</span> down</div>
          </Slide>
          <Slide direction="right" delay={400}>
            <div className="animation slide"><span className="highlight">Slide</span> right</div>
          </Slide>
          <Slide direction="left" delay={600}>
            <div className="animation slide"><span className="highlight">Slide</span> left</div>
          </Slide>
        </div>
        <div className="section">
          <h2 className="title">Fades</h2>
          <Fade direction="up">
            <div className="animation fade"><span className="highlight">Fade</span> up</div>
          </Fade>
          <Fade direction="down" delay={200} >
            <div className="animation fade"><span className="highlight">Fade</span> down</div>
          </Fade>
          <Fade direction="right" delay={400} >
            <div className="animation fade"><span className="highlight">Fade</span> right</div>
          </Fade>
          <Fade direction="left" delay={600} >
            <div className="animation fade"><span className="highlight">Fade</span> left</div>
          </Fade>
        </div>
        <div className="section">
          <h2 className="title">Bounces</h2>
          <Bounce direction="up">
            <div className="animation bounce"><span className="highlight">Bounce</span> up</div>
          </Bounce>
          <Bounce direction="down" delay={200}>
            <div className="animation bounce"><span className="highlight">Bounce</span> down</div>
          </Bounce>
          <Bounce direction="right" delay={400}>
            <div className="animation bounce"><span className="highlight">Bounce</span> right</div>
          </Bounce>
          <Bounce direction="left" delay={600}>
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

{/*     
      */}