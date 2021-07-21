import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';
import answers from "./answers.js";

function App() {
  return (
    <div className="App">
      <EightBall answers={answers}/>
    </div>
  );
}

export default App;
