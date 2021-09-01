import logo from './logo.svg';
import './App.css';
import CenteredCard from './components/CenteredCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard children='Children 1'/>
        <CenteredCard children='Children 2'/>
        <CenteredCard children='Children 3'/>
      </header>
    </div>
  );
}

export default App;
