import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "../component/Navbar/Navbar";
import JobInfo from "../component/JobInfo/JobInfo";
import Round from "../component/round/Round";
import Rectangular from "../component/rectangular/Rectangular";
import Cricle from "../component/circle/Cricle";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Navbar />,
            },  
            {
                path: '/jobinfo',
                element: <JobInfo />,
            },  
            {
                path: '/round',
                element: <Round />,
            },  
            {
                path: '/rectangular',
                element: <Rectangular />,
            },  
            {
                path: '/cricle',
                element: <Cricle />,
            },  
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (

        <div >
            
            <Navbar />
            <Outlet />
        </div>

    )
}
// Main()
export default Router