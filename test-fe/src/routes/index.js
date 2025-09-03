import Home from "../pages/Home";
import HomePage from "../pages/Layout/pages/HomPage";
import MapWithList from "../pages/MapLocation";
import MultiStepForm from "../pages/MultiStepForm";
export const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
         path: "/a1",
        element: <HomePage/>
    },
    {
         path: "/a2",
        element: <MultiStepForm/>
    }
    ,
    {
         path: "/a3",
        element: <MapWithList/>
    }
];