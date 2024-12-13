import {Cookies} from 'react-cookie'

const cookies = new Cookies();

export const setCookie = (name, value, options = {}) => {
    if(options.expires && !(options.expires instanceof Date)){
        alert("쿠키 값 이상")
    }
   
    return cookies.set(name, value, options);
}

export const getCookie = (name) => {
    return cookies.get(name);
}

export const removeCookie = (name, path = '/') => {
    cookies.remove(name, {path: path})
}