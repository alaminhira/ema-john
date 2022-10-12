import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import { productAndCartLoader } from './loaders/productAndCartLoader';

function App() {
  const router = createBrowserRouter([
    { path: '/', 
      element: <Main />, 
      children: [
        { path: '/', 
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        { path: 'order', 
          loader: productAndCartLoader,
          element: <Order />
         },
        { path: 'inventory', element: <Inventory /> },
        { path: 'about', element: <About /> }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
