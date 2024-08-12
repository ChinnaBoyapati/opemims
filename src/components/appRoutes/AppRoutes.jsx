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
// import { Payments } from "@mui/icons-material";
import Payments from "../insurees&policies/Payments"
import MedicalItems from './../administration/MedicalItems';
import MedicalServices from "../administration/MedicalServices"
import MedicalServicesPrice from "../administration/MedicalServicesPrice";
import AdministrationUsers from "../administration/AdministrationUsers";
import AdministrationUserProfile from "../administration/AdministrationUserProfile";
import Payers from "../administration/Payers";
import Locations from "../administration/Locations";
import PolicyHolderUser from "../administration/PolicyHolderUser";
import ConributionPlans from "../administration/ConributionPlans";
import ContributionPlanBundles from "../administration/ContributionPlanBundles";
import AddFamily from "../insurees&policies/AddFamily";
import ViewFamily from "../insurees&policies/ViewFamily";
import Insurees from "../insurees&policies/Insurees";
import Policies from "../insurees&policies/Policies";
import Contributions from "../insurees&policies/Contributions";
import PolicyHolders from "../insurees&policies/PolicyHolders";
// import { Contacts } from "@mui/icons-material";
// import Contacts from '../insurees&policies/Contracts';
import Contracts from "../insurees&policies/Contracts";

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
        path: "/home",
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
      },
      {
        path: "/home/administration-users",
        element: <AdministrationUsers />
      },
      {
        path: "/home/administration-users-profiles",
        element: <AdministrationUserProfile />
      },
      {
        path: "/home/payers",
        element: <Payers />
      },
      {
        path: "/home/locations",
        element: <Locations />
      },
      {
        path: "/home/policyholder-users",
        element: <PolicyHolderUser />
      },
      {
        path: "/home/contribution-plans",
        element: <ConributionPlans />
      },
      {
        path: "/home/contribution-plans-bundles",
        element: <ContributionPlanBundles />
      },
      {
        path: "/home/add-family",
        element: <AddFamily />
      },
      {
        path: "/home/view-family",
        element: <ViewFamily />
      },
      {
        path: "/home/insurees",
        element: <Insurees />
      },
      {
        path: "/home/policies",
        element: <Policies />
      },
      {
        path: "/home/contributions",
        element: <Contributions />
      },
      {
        path: "/home/payments",
        element: <Payments />
      },
      {
        path: "/home/policyHolders",
        element: <PolicyHolders />
      },
      {
        path: "/home/contacts",
        element: <Contracts />
      },
    ]
  }
])
