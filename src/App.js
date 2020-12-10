import FruitContainer from './components/FruitContainer'
import './App.css';

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', "kiwi", 'starfruit', 'cherry', 'crabapple', 'mango', 'mangosteen', 'grapefruit'];
  return (
    <div className="App">
     <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
