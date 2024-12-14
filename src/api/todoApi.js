import axios from "axios"
import jwtAxios from "../util/jwtUtil"

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/todo`

export const getOne = async (tno) => {
    const res = await jwtAxios.get(`${prefix}/${tno}`)
    return res.data; 
}

export const getList = async (pageParam) => {
    
    const {page, size} = pageParam; 
    const res = await jwtAxios.get(`${prefix}/list`, {params: {page: page, size: size}})
    console.log("확인")
    console.log(res.data)
    return res.data; 
}