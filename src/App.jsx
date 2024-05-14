import React from 'react';
import Header from './components/Common/header';
import Hero from './components/herosection';
import Welcome from './components/welcomePage';


const App = () => {
  return (
    <div>
    <Header /> 
      <Hero />
      <Welcome/>
    </div>
  );
};

export default App;
