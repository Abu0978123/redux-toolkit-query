import { createBrowserRouter } from "react-router-dom"
import Read from "./components/Read"
import Header from "./components/Header"
import Create from "./components/Create"
import { Outlet  } from "react-router-dom";

export const router = createBrowserRouter([
   {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Read/>
      },
      {
       path: "/create",
       element: <Create/>
      },
      {
        path: "/edit/:id",
        element: <Create />,
      }
    ]
   }
  ])

function App() {

  return (
   <>
   <Header/>
   <Outlet/>
   </>
  )
}

export default App
