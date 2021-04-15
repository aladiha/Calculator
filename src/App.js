
import './App.css';
import Calculator from './components/calculator/calculator';
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <Calculator />
      <p className="aladin"><FontAwesomeIcon icon={faFire}/> By Aladin</p>
    </div>
  );
}

export default App;
