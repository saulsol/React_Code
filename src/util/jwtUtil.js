import axios from 'axios'
import {getCookie} from "./cookieUtil"

const jwtAxios = axios.create();

// before 
const beforeReq = (config) => {
    console.log("before request....")

    const memberInfo = getCookie("member");

    console.log(`memberINFO : ${memberInfo}`)

    if(!memberInfo){
        console.log('member not found')
        return Promise.reject(
            {
                response: {
                    data: {error : "REQUIRE_LOGIN"}
                }
            }
        )
    }
        
    const {accessToken} = memberInfo
    config.withCredentials = true
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config
}

// fail request
const requestFail = (err) => {
    console.log("request error....")
    return Promise.reject(err)
}

// before return response
const beoforeRes = async (res) => {
    console.log("before return response....")
    return res
}

// fail response
const resonseFail = (err) => {
    console.log("response fail error....")
    return Promise.reject(err)
}


jwtAxios.interceptors.request.use(beforeReq, requestFail)
jwtAxios.interceptors.response.use(beoforeRes, resonseFail)


export default jwtAxios