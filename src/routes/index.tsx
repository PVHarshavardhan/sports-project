import { createBrowserRouter} from "react-router-dom"
import AccountLayout from "../layouts/account";
import Signin from "../pages/signin";
import Logout from "../pages/logout";
import Signup from "../pages/signup";
import ArticlesContainer from "../pages/articles/ArticlesContainer";
import Articles from "../pages/articles";


const router = createBrowserRouter([
    { path:"/",
      element:(<AccountLayout />),
      children:[
        {
          path:"articles",
          element:(
            <>
            <ArticlesContainer />
            <Articles />
            </>
          )
        }
      ]
      
    },
    
    {
        path: "/signin", 
        element: <Signin />
    },
    {
    path: "/signup", 
    element: <Signup />
    },
    { 
    path: "/logout", 
    element: <Logout /> 
    },
])
export default router;