import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { Landing } from "../screens/Landing";
import { AboutUs } from "../screens/AboutUs";
import { CoursesDetails } from "../screens/CoursesDetails";
import { ArticlesDetails } from "../screens/ArticlesDetails";
import { RegisterForm } from "../components/RegisterForm";


const RoutesApp = createBrowserRouter([
    
    
      {
        path:'/',
        element: <Landing />,
      },
      {
        path:'/about',
        element: <AboutUs />,
      },
      {
        path:'/courses-details',
        element: <CoursesDetails />,
      },
      {
        path:'/articles-details',
        element: <ArticlesDetails />,
      },
      {
        path:'/register',
        element: <RegisterForm />,
      },
      
    
      ]);
  
  export default RoutesApp