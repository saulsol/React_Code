import {Link} from "react-router-dom"

const MainPage = () => {
    return (
        <div>
            <div className="flex">
                <Link to={'/about'}>About 이동</Link>
            </div>
            <div className=" text-3xl">
                <div>MainPage</div>
            </div>
        </div>
    );
}

export default MainPage;