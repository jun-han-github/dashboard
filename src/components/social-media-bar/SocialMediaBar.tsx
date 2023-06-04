import './SocialMediaBar.scss';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaBar = () => {

	const iconSize = 24;
	const socialMediaUrl = {
		gmail: 'https://mail.google.com/mail/?view=cm&to=junhan.3008@gmail.com',
		linkedin: 'https://www.linkedin.com/in/junhan-liu-865b00164/',
		github: 'https://github.com/jun-han-github'
	}

	return (
		<div className="bar">
			<a href={socialMediaUrl.gmail} target="_blank" className="bar-icons"><FaEnvelope size={iconSize} /></a>
			<a href={socialMediaUrl.github} target="_blank" className="bar-icons"><FaGithub size={iconSize} /></a>
			<a href={socialMediaUrl.linkedin} target="_blank" className="bar-icons"><FaLinkedin size={iconSize} /></a>
		</div>
	)
}

export default SocialMediaBar;
