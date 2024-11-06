import React from "react";
import { Navigate } from "react-router-dom";
import { ActivitiesAdmPag } from "../ActivitiesAdmPag";
import { createBrowserRouter } from "react-router-dom";
import { ProgressAdmPag } from "../ProgressAdmPag";
import { StudentsAdmPag } from "../StudentsAdmPag";
import { TopicsAdmPag } from "../TopicsAdmPag";
import {SignIn} from "../LoginPag";
import {SignUp} from "../SignUpPag"
import { HomePag } from "../HomePag";
import { StudentHome } from "../StudentHome";

function routerApp (){
  return createBrowserRouter([
    {
      path:"/",
      element:<SignIn/>
    },
    {
      path:"/SignUp",
      element:<SignUp/>
    },
    {
      path: "/Home",
      element:<HomePag/>,
      children:[
        {
          path: "Progress",
          element: <ProgressAdmPag/>
        },
        {
          path: "Students",
          element: <StudentsAdmPag/>
        },
        {
          path: "Topics",
          element: <TopicsAdmPag/>

        },
        {
          path:"Activities",
          element:<ActivitiesAdmPag/>
        },
        {
          path: "",
          element: <Navigate to="Topics" replace />,
        }
        
      ]
    },
    {
      path:"/studentHome",
      element:<StudentHome/>
    }
  ])
}
export{routerApp}
