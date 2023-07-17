import './App.css';
import Counter from './Counter';
// import Timer from './Timer';
import Timer from './hooks/Timer';
// import useTimer from './hooks/useTimer';

function App() {
  return (
    <div className="App">
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
