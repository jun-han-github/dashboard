import { FaAws, FaDocker, FaNodeJs, FaReact, FaRegMoon } from 'react-icons/fa';
import './ActionBar.scss';

const ActionBar = () => {

    const iconSize = 30;

    return (
        <div className="action-bar">
            <div className="candybar">
                <FaRegMoon className="bar-icons" size={iconSize} />
                <FaReact className="bar-icons" size={iconSize} />
                <FaNodeJs className="bar-icons" size={iconSize} />
                <FaDocker className="bar-icons" size={iconSize} />
                <FaAws className="bar-icons" size={iconSize} />
            </div>
        </div>
    )
}

export default ActionBar