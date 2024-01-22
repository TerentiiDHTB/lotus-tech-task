import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {routes} from "@/app/provider/routes.tsx";

export const App = () => {
    return (
        <RouterProvider router={createBrowserRouter(routes)}/>
    )
}
