import { FaWhatsapp } from "react-icons/fa";
import { jobExperiences as data } from "../assets/data/job-experiences";
import Box from "../components/box/Box";
import HeaderButton from "../components/buttons/header-buttons/HeaderButton";
import ExperienceBox from "../components/experience-box/ExperienceBox";
import SocialMediaBar from "../components/social-media-bar/SocialMediaBar";
import './HomePage.scss';

const HomePage = () => {

    const skill = (skillName: string, url: string) => {
        return (<a href={url} target="_blank" className="skill-highlight"><strong>{skillName}</strong></a>);
    }

    const react = skill("React", "https://react.dev/");
    const vuejs = skill("Vuejs", "https://vuejs.org/");
    const angular = skill("Angular", "https://angular.io/");
    const laravel = skill("Laravel", "https://laravel.com/");
    const ionic = skill("Ionic", "https://ionicframework.com/");
    // const reactNative = skill("React Native", "https://reactnative.dev/");

    const nameStyle = {
        h2: { fontFamily: 'Consolas', minWidth: '216px' },
        span: { color: '#ffffff', fontSize: '20px' }
    }

    return (
        <div>
            <div className="home-container">
                <div className="intro">
                    <h2 style={nameStyle.h2}>
                        <span style={nameStyle.span}>{" <"}</span>
                        LiuJunHan
                        <span style={nameStyle.span}>{" />"}</span>
                    </h2>
                    <p>
                        A Frontend Developer - with backend knowledge.<br/>
                    </p>
                    <SocialMediaBar />
                </div>
                <div className="links">
                    <Box />
                </div>
            </div>

            <div className="about">
                <div className="me">
                    <h3>About Me</h3>
                    <a href="https://wa.me/+6591166202" target="_blank">
                        <div className="whatsapp-icon">
                            <FaWhatsapp size={20} color="green" />
                        </div>
                    </a>
                </div>
                <p>In mid-2020, I started my software journey with HTML, CSS, Javascript, Typescript and {react} while creating value in a blockchain-based startup that drives adoption in digital credentials.</p>
                <p>In 2021, I used {vuejs} and {laravel} to create templates for e-Commerce platforms.</p>
                <p>In 2022, I was exposed to blockchain technologies and had the chance to work with crypto-related APIs while developing a mobile app from scratch using {ionic}, {angular} and {laravel}.</p>
            </div>

            <div className="experience">
                <h3>Experiences</h3>
                { data.map((experience) => (<ExperienceBox {...experience} />)) }
            </div>
        </div>
    )
}

export default HomePage;
