import './style.css';
import Header from './Header.js';

const name = 'Sezin';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello, {name}</h1>
    </div>
  );
}

export default App;
