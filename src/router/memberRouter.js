import { Suspense, lazy } from 'react';



const Login = lazy(() => import("../pages/member/LoginPage"))
const Logout = lazy(() => import("../pages/member/LogoutPage"))



const memberRouter = (loading) => {

    return [
        {
            path: "login",
            element: <Suspense fallback={loading}><Login/></Suspense>
        },
        {
            path: "logout",
            element: <Suspense fallback={loading}><Logout/></Suspense>
        }
    ]
}

export default memberRouter