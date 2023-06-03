import Box from "../components/box/Box";
import SocialMediaBar from "../components/social-media-bar/SocialMediaBar";
import './HomePage.scss';

const HomePage = () => {

    return (
        <div className="home-container">
            <div className="intro">
                <h2>Liu Junhan</h2>
                <p>A Fullstack Developer.</p>
                <SocialMediaBar />
            </div>
            <div className="links">
                <Box />
            </div>
        </div>
    )
}

export default HomePage;
