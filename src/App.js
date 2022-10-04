import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='shop-container'>
        <Shop />
      </main>
    </div>
  );
}

export default App;
