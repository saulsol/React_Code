import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";
import memberRouter from "./memberRouter";

const Loading = <div>Loading...</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))


const root = createBrowserRouter([
    {
        path: "", 
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path:"todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter(Loading)
    },
    {
        path:"member",
        children: memberRouter(Loading)
    }
    
])

export default root; 