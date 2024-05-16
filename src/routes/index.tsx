import { createBrowserRouter} from "react-router-dom"
import AccountLayout from "../layouts/account";
import Signin from "../pages/signin";
import Logout from "../pages/logout";
import Signup from "../pages/signup";
import ArticlesContainer from "../pages/articles/ArticlesContainer";
import Articles from "../pages/articles";
import MatchesContainer from "../pages/matches/MatchesContainer";
import Matches from "../pages/matches";


const router = createBrowserRouter([
    { path:"/",
      element:(<AccountLayout />),
      children:[
        {
          path:"articles",
          element:(
            <>
            <MatchesContainer />
            <Matches />
            
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