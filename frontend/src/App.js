import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import HelloClass from './components/HelloClass';
import Counter from './components/Counter';
import Backend from './components/Backend';

function App() {
  return (
    <div>
      <Hello name="Buddy"/>
      <h1>Hi Parth</h1>
      <button> Click Me !!</button>
      <HelloClass name="Anakin"/>
      <Counter/>
      <Backend/>
    </div>
    );
}

export default App;
