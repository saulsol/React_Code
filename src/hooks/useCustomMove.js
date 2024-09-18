import {useNavigate, useSearchParams, createSearchParams} from "react-router-dom"

const getNum = (param, defaultValue) => {

    if(!param){
        return defaultValue;
    }
    return param; 
}


const useCustomMove = () => {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    
    const page = getNum(queryParams.get('page'), 1);
    const size = getNum(queryParams.get('size'), 10);

    const queryDefault = createSearchParams({page, size}).toString(); 

    const moveToList = (pageParam) => {
        let queryStr = "";
        if(pageParam){
            const pageNum = getNum(pageParam.page, 1);
            const sizeNum = getNum(pageParam.size, 10);
            // 둘 중 하나가 없을 수 있으니깐 getNum() 사용 

            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString();
        }else{
            queryStr = queryDefault;
        }

        navigate({pathname: `../list`, search: queryStr })
    }

    return {moveToList, page, size}
}

export default useCustomMove
    