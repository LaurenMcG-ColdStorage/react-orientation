import { useState } from 'react';

import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

import './App.css';

function App() {
  const [globalName, setGlobalName] = useState();
  
  const clickGlobalNameChange = () => {
    setGlobalName('Do you like Tacos!?');
  }
  
  return (
    <>
    {/* "Header" component*/}
      <Header />
      <button onClick={clickGlobalNameChange}>Change all names</button>
      <Card globalName={globalName}/>
      <Footer />
    </>
  )
}

export default App;
