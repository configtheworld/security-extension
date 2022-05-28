import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListItems from './components/ListItems';
import { PageInfoProvider } from './contexts/pageInfoProvider';

function App() {

  return (
    <PageInfoProvider>
<div className="App">
      <div className="App"> <header className="App-header"> <Header /> <ListItems /> <Footer /> </header> </div>
    </div>
    </PageInfoProvider>
    
  );
}

export default App;

