import { createBrowserRouter,Navigate } from "react-router-dom";
import Index from "../client/Index.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Testimonials from "../pages/Testimonials.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "portfolio",
                element: <Portfolio />,
            },
            {
                path: "testimonials",
                element: <Testimonials />,
            },
        ],
    },
    {
        path: "/index.html",
        element: <Navigate to="/" replace />,
    },
]);

export default router;
