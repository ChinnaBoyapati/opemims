// import { Login } from "@mui/icons-material";
import Login from "../uicomponents/Login"
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ForgetPassword from "../uicomponents/ForgetPassword";
import Regester from "../uicomponents/Regester";
import Home from './../Home';
import ClaimsControlPage from './../claims/ClaimsControlPage';
import ChangePassword from "../uicomponents/ChangePassword";
import ClaimReview from "../claims/ClaimReview";
import BatchRunControlPage from "../claims/BatchRunControlPage";
import ProductControl from "../administration/ProductControl";
import HealthFacilities from "../administration/HealthFacilities";
import { MedicalServices } from "@mui/icons-material";
import MedicalItems from './../administration/MedicalItems';
import MedicalServicesPrice from "../administration/MedicalServicesPrice";

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
      },
      {
        path: "/home/claim-review",
        element: <ClaimReview />
      },
      {
        path: "/home/batch-run-control",
        element: <BatchRunControlPage />
      },
      {
        path: "/home/products",
        element: <ProductControl />
      },
      {
        path: "/home/health-facilities",
        element: <HealthFacilities />
      },
      {
        path: "/home/medical-services",
        element: <MedicalServices />
      },
      {
        path: "/home/medical-items",
        element: <MedicalItems />
      },
      {
        path: "/home/medical-services-price",
        element: <MedicalServicesPrice />
      }
    ]
  }

])
