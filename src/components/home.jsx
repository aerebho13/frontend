import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-page">
            <h1>Kudos</h1>
            <h4>Fresh Meals made by Quality Chefs.</h4>

            <Link to="/catalog" className="btn btn-info">
                Check out our catalog!
            </Link>
        </div>
    );

};

export default Home;