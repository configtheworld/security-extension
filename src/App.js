import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListItems from './components/ListItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ListItems />
        <Footer />
      </header>
    </div>
  );
}

export default App;
