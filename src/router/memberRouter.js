import { Suspense, lazy } from 'react';



const Login = lazy(() => import("../pages/member/LoginPage"))
const Logout = lazy(() => import("../pages/member/LogoutPage"))
const KakaoRedirect = lazy(() => import("../pages/member/KakaoRedirectPage"))



const memberRouter = (loading) => {

    return [
        {
            path: "login",
            element: <Suspense fallback={loading}><Login/></Suspense>
        },
        {
            path: "logout",
            element: <Suspense fallback={loading}><Logout/></Suspense>
        },
        {
            path: 'kakao',
            element: <Suspense fallback={loading}><KakaoRedirect/></Suspense>
        }
    ]
}

export default memberRouter