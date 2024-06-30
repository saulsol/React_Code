import {Link} from "react-router-dom"
import BasicLayout from "../layouts/BasicLayout";

const MainPage = (props) => {
    return (
        // BasicLayout에게 아래 <div> 태그 값을 준다. 
       <BasicLayout>
            <div className="text-3xl"> MainPage </div> 
       </BasicLayout>
    );
}

export default MainPage;