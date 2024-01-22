import React from "react";
import {Main} from "@/pages/main";

interface Route {
    path: string,
    element: React.ReactNode
}

export const routes: Route[] = [
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/*",
        element: <div>404</div>
    }
]