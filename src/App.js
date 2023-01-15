import './App.css';
import Main from './components/main/main';
import ProductContext from './productContext';

function App() {
  return (
    <ProductContext>
      <div className="App">
        <Main />
      </div>
    </ProductContext>
  );
}

export default App;
