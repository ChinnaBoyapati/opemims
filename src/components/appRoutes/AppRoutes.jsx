// import { Login } from "@mui/icons-material";
import Login from "../uicomponents/Login"
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ForgetPassword from "../uicomponents/ForgetPassword";
import Regester from "../uicomponents/Regester";
import Home from './../Home';
import ClaimsControlPage from './../claims/ClaimsControlPage';
import ChangePassword from "../uicomponents/ChangePassword";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,

  },
  {
    path: "/regester",
    element: <Regester />,

  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home/claims-controls",
        element: <ClaimsControlPage />
      },
      {
        path: "/home/change-password",
        element: <ChangePassword />
      }
    ]
  }

])
