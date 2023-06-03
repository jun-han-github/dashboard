import './Box.scss';
import { FaFilePdf } from 'react-icons/fa';

const Box = () => {

	const resumePathUrl = "./assets/data/LiuJunHan_CV_LS.pdf";

	return (
		<a href={resumePathUrl} download="LiuJunHan_CV_LS.PDF">
			<button className="download-card resume">
				<FaFilePdf style={{ color: '#40e0d0' }} size={24} />
				<span className="text">Download<br/>Resume</span>
			</button>
		</a>
	)
}

export default Box
