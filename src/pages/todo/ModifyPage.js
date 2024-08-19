import { useParams, useNavigate } from "react-router-dom"
const ModifyPage = () => {

    const {tno} = useParams();
    const navigate = useNavigate(); 

    const moveToRead = () => {
        navigate({pathname: `/todo/read/${tno}`})
    }

    const moveToList = () => {
        navigate({pathname: `todo/list`})
    }


    return(
        <div className="text-3xl font-extrabold">
            Todo ModifyPage {tno}
        </div>
    );
}
export default ModifyPage; 