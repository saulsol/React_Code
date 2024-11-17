import { Suspense, lazy } from 'react';



const Login = lazy(() => import("../pages/member/LoginPage"))



const memberRouter = (loading) => {

    return [
        {
            path: "login",
            element: <Suspense fallback={loading}><Login/></Suspense>
        },
    ]
}

export default memberRouter