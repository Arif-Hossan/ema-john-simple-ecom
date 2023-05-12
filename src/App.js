import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Shop from './components/Shop/Shop';
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
          path : '/',
          element : <Shop></Shop>,
          loader : () => fetch('products.json')
        },
        {
          path :'/order',
          element : <Order></Order>,
          loader : () => fetch ('products.json'),
        },
        {
          path : '/inventory',
          element : <Inventory></Inventory>
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
