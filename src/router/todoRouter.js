import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom"; 


const TodoList = lazy(() => import("../pages/todo/ListPage"))
const TodoRead = lazy(() => import("../pages/todo/ReadPage"))

const todoRouter = (loading) => {
    return[
        {
            path: "list",
            element: <Suspense fallback={loading}><TodoList/></Suspense>
        },
        {
            path: "", 
            element: <Navigate replace to="list" /> // 리다이렉션 처리 
        },
        {
            path: "read/:tno",
            element: <Suspense fallback={loading}><TodoRead/></Suspense>
        }
    ]
}

export default todoRouter; 