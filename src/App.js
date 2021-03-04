import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MetalMeta from './components/MetalMeta/MetalMeta';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <MetalMeta />
      </header>
    </div>
  );
}

export default App;
