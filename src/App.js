import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import cremation from './resources/cremation.png';
import base0 from './resources/base0.png';
import base1 from './resources/base1.png';
import base2 from './resources/base2.png';
import base3 from './resources/base3.png';

function App() {
  return (
    <div className="App">
      <Parallax pages={5}>
        <ParallaxLayer speed={1}>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={.5}>
          <h2>Web dev === fun</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={.25}>
          <img src={cremation} className={'center-image'}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.2}>
          <img src={base0} className={'center-image'}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.}>
          <img src={base1} className={'center-image'}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={.8}>
          <img src={base2} className={'center-image'}></img>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={.6}>
          <img src={base3} className={'center-image'}></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
