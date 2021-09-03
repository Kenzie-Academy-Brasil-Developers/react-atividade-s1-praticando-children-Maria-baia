import logo from './logo.svg';
import './App.css';
import CenteredCard from './components/CenteredCard'
import centeredCard from './components/CenteredCard';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CenteredCard children={1}>
          <h1>Children 1</h1>
          <h1>Children 2</h1>
          <h1>Children 3</h1>
        </CenteredCard>
      </div>
    </div>
  );
}

export default App;
