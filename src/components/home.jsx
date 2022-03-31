import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-page">
            <div className="top-banner">
                <div className="top-banner-text">
                    <h1>Kudos</h1>
                    <h4>Fresh Meals made by Quality Chefs.</h4>
                            <div className="btn-area">
                    <Link to="/catalog" className="btn btn-info">
                        VIEW OUR CATALOG
                    </Link>
                    </div>
                </div>
                <img src="/imgs/meals-banner.jpeg" alt="meal banner" />
                
            </div>
        </div>
    );

};

export default Home;