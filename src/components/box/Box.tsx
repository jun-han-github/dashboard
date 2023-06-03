import './Box.scss';
import reactLogo from '../../assets/react.svg'
import { FaFilePdf } from 'react-icons/fa';


const Box = () => {

	const resumePathUrl = "./assets/data/LiuJunHan_CV_LS.pdf";

	return (
		<div className="box">
			<img key={0} src={reactLogo} className="logo" alt="React logo" />
			<h2>Download My Resume</h2>
			<div className="box-column-layout">
				<a href={resumePathUrl} download="LiuJunHan_CV_LS.PDF">
					<button className="download-card resume">
						<FaFilePdf style={{ color: '#40e0d0' }} size={36} />
						<span className="text">Download<br/>PDF</span>
					</button>
				</a>
			</div>
		</div>
	)
}

export default Box
