import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <div className="{'flex'}">
                <Link to={'/about'}> About </Link> 
            </div>

            <div>AboutPage</div>
        </div>
    );
}

export default AboutPage;