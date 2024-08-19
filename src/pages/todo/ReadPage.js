import { useParams, useNavigate, useSearchParams, createSearchParams} from "react-router-dom"
import {useCallback} from "react"

const ReadPage = () => {
    
    const {tno} = useParams();

    const navigate = useNavigate(); 

    const [queryParams] = useSearchParams(); 
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;  

    const queryStr = createSearchParams({page, size}).toString(); 

    const moveToModify = useCallback((tno) => {
        navigate({
            pathname: `/todo/modify/${tno}`,
            search: queryStr 
        })
    }, [tno, page, size]);

    const moveToList = useCallback(() => {
        navigate({pathname: '/todo/list', search: queryStr})
    }, [page, size]);

    return (
        <div className="text-3xl font-extrabold" >
            <button onClick={() => moveToModify(tno)}>test modify </button>
            <button onClick={() => moveToList()}>test list </button>
        </div>
    );
}

export default ReadPage; 