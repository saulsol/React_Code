import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import loginSlice, { loginPostAsync, logout } from './../slices/loginSlice';


const useCustomLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const loginState = useSelector(state => state.loginSlice);

    const isLogin = loginState.email ? true : false ; // 로그인 여부 

    const doLogin = async (loginParam) => {
        const action = await dispatch(loginPostAsync(loginParam))
        return action.payload;
    }

    const doLogout = () => {
        dispatch(logout())
    }

    const moveToPath = (path) => {
        navigate({pathname: '/'}, {replace:true})
    }
        
    const moveToLogin = () => {
        navigate({pathname: '/member/login'}, {replace:true})
    }

    const moveToLoginReturn = () => {
        return <Navigate replace to="/member/login" />
    }

    return {loginState, isLogin, doLogin, doLogout, moveToPath, moveToLogin, moveToLoginReturn}
        
}

export default useCustomLogin