import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact_Us from "./pages/Contact_Us.jsx";
import Error_Pages from "./pages/Error_Pages.jsx";
import Country_Details from "./components/Country_Details.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error_Pages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact_Us />,
      },
      {
        path: "/countryDetails",
        element: <Country_Details />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
