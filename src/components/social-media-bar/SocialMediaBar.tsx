import './SocialMediaBar.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaBar = () => {

	const iconSize = 24;

	return (
		<div className="bar">
			<a href="" className="bar-icons"><FaGithub size={iconSize} /></a>
			<a href="" className="bar-icons"><FaLinkedin size={iconSize} /></a>
		</div>
	)
}

export default SocialMediaBar;
