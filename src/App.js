import {
  createBrowserRouter,
  createRoutesFromChildren,

  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {
  //! this below code shows that the "NAVBAR" is at the top and in below there is the childern of the navbar 
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      errorElement:<ErrorPage/>,
      children:[
        // {path:"/",element:<Home/>},
        // {path:"",element:<Home/>},
        {index:true,element:<Home/>},
        {path:"about",element:<About/>},
        {path:"items",
        // element:<Items/>,
        children:[
          {index:true,element:<Items/>},
          {
            path:':Id',
            element:<ItemDetails/> 
          }

        ]
      }
        
      ]
    }
  ]
  )

  return (
     <>
     <RouterProvider router={router}/>
     </>
  );
}

export default App;
