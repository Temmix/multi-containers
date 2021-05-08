import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import OtherPage from './otherpage'
import Fib from "./fib"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header> 

        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" compoenent={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
