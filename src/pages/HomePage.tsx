import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import ExperienceBox from "../components/experience-box/ExperienceBox";
import SocialMediaBar from "../components/social-media-bar/SocialMediaBar";
import './HomePage.scss';
import Modal from "../components/modal/Modal";
import { getWebsiteUrl } from '../util/helper';
import { jobExperiences } from "../assets/data/job-experiences";
import { personalProjects } from '../assets/data/personal-projects';
import ResumeButton from '../components/buttons/resume-button/ResumeButton';

const HomePage = () => {

    const [modalWhatsapp, setModalWhatsapp] = useState(false);
    const [modalPDF, setModalPDF] = useState(false);

    const handleModalClick = (type: string): void => {
        if (type === 'whatsapp') {
            setModalWhatsapp(!modalWhatsapp);
        } else {
            setModalPDF(!modalPDF);
        }
    }

    const skill = (skillName: string) => {
        return (<a href={getWebsiteUrl(skillName)} target="_blank" className="skill-highlight"><strong>{skillName}</strong></a>);
    }

    const react = skill("React");
    const vuejs = skill("Vuejs");
    const angular = skill("Angular");
    const laravel = skill("Laravel");
    const ionic = skill("Ionic");
    const reactNative = skill("React Native");
    const nodeJs = skill("Nodejs");
    const aws = skill("AWS");

    const nameStyle = {
        h2: { minWidth: '216px' },
        span: { color: '#ffffff', fontSize: '20px' }
    }

    return (
        <div className="home">
            <div className="header">
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
                    <ResumeButton onClick={() => handleModalClick('pdf')} />
                    {
                        modalPDF &&
                        <Modal
                            trigger={modalPDF}
                            handleModal={() => handleModalClick('pdf')}
                            data={{
                                iconType: 'pdf',
                                title: 'Hi there!',
                                message: 'You are about to download my resume!',
                                url: './assets/data/LiuJunHan_CV_LS.pdf'
                            }} />
                    }
                </div>

                <div className="about">
                    <div className="me">
                        <h3>About Me</h3>
                        {
                            modalWhatsapp &&
                            <Modal
                                trigger={modalWhatsapp}
                                handleModal={() => handleModalClick('whatsapp')}
                                data={{
                                    iconType: 'whatsapp',
                                    title: 'Hi there!',
                                    message: 'You are about to WhatsApp me!',
                                    url: 'https://wa.me/+6591166202?text='
                                }} />
                        }
                        <div onClick={() => handleModalClick('whatsapp')} className="about-whatsapp-icon">
                            <FaWhatsapp size={20} color="#40e0d0" />
                        </div>
                    </div>

                    <p>In mid-2020, I started my software journey with HTML, CSS, Javascript. I then work with Typescript and {react} while creating value in a blockchain-based startup that drives the adoption of digital credentials.</p>
                    <br />
                    <p>In 2021, I used {vuejs} and {laravel} to create templates for e-Commerce platforms.</p>
                    <br />
                    <p>In 2022, I was exposed to blockchain technologies once again and had the chance to work with crypto-related APIs while developing a mobile app from scratch using {ionic}, {angular}, {nodeJs} and {laravel}.</p>
                    <br />
                    <p>In 2023, I am furthering my frontend development skills by building a mobile app using {reactNative} with a {nodeJs} backend. Also extensively getting my hands-on experience with the {aws} Cloud.</p>
                    <br />
                    <p>Before I became a software developer, I was a financial consultant, more details are provided in my resume.</p>
                </div>
            </div>

            <div className="history">
                <h3>Experiences</h3>
                { jobExperiences.map((experience, index) => (<ExperienceBox key={index} {...experience} />)) }

                <h3>Personal Projects</h3>
                { personalProjects.map((projects, index) => (<ExperienceBox key={index} {...projects} />)) }
            </div>
        </div>
    )
}

export default HomePage;
