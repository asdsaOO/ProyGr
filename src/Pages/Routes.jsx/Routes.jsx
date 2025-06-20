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
import { StudentHome } from "../StudentPages/StudentHome";
import { LessonsPage } from "../StudentPages/LessonsPAge";
import { ProgressPage } from "../StudentPages/ProgresoPAge";
import { ProfilePage } from "../StudentPages/ProfilePage";
import { GamePage } from "../StudentPages/GAmePage";
import { AdmProfilePage } from "../AdmProfilePage";
import { RankPag } from "../StudentPages/RankPage";
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
          path:"Profile",
          element:<AdmProfilePage/>
        },
        {
          path: "",
          element: <Navigate to="Topics" replace />,
        }
        
      ]
    },
    {
      path:"/studentHome",
      element:<StudentHome/>,
      children:[
        {
          path: "Lessons",
          element: <LessonsPage/>

        },
        {
          path:"Progress",
          element: <ProgressPage/>
        },
        {
          path:"Profile",
          element: <ProfilePage/>
        },
        {
          path:"GameLesson",
          element:<GamePage/>
        },
        {
          path: "Rank",
          element: <RankPag/>

        },
        {
          path: "",
          element: <Navigate to="Lessons" replace />,
        }

      ]
    }
  ])
}
export{routerApp}
