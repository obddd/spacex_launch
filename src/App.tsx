import React from 'react';
import logo from '../src/logo.png';
import LaunchContainer from './components/Launch';
import LaunchInfoContainer from './components/LaunchInfo';

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt="spaceX"
        style={{ width: 300, display: 'block', margin: 'auto' }}
      />
      {/* <LaunchContainer />
      <LaunchInfoContainer /> */}
    </div>
  );
}

export default App;
