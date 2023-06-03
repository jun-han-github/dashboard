import './Box.scss';
import reactLogo from '../../assets/react.svg'
import { FaFileDownload } from 'react-icons/fa';


const Box = () => {

	return (
		<div className="box">
			<img key={0} src={reactLogo} className="logo" alt="React logo" />
			<h2>Dashboard by Junhan.</h2>
			<div className="box-column-layout">
				<a href="./public/assets/data/LiuJunHan_CV_LS.pdf" download>
					<button className="download-card resume">
						<FaFileDownload style={{ color: '#40e0d0' }} size={36} />
						<span className="text">Download<br/>Resume</span>
					</button>
				</a>
			</div>
		</div>
	)
}

export default Box
