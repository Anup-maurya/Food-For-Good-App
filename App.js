import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import './index.css';
import Body from './src/components/Body'
import Footer from './src/components/Footer';

const App=()=>(
 <>
  <Header/>
  <Body/>
  <Footer/> 


 </>
);
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 // passing react element inside root

 root.render(<App/>);
