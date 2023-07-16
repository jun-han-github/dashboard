import { FaAws, FaDocker, FaNodeJs, FaReact, FaRegMoon } from 'react-icons/fa';
import './ActionBar.scss';
import { useEffect, useState } from 'react';

const ActionBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setScrolled(scrollTop >= 40);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const iconSize = 30;
    const iconColor = '#40e0d0';

    return (
        <div className="action-bar">
            <div className={`candy-bar ${scrolled ? 'scrolled' : ''}`}>
                <FaReact className="bar-icons" size={iconSize} color={iconColor} />
                <FaNodeJs className="bar-icons" size={iconSize} color={iconColor}  />
                <FaDocker className="bar-icons" size={iconSize} color={iconColor}  />
                <FaAws className="bar-icons" size={iconSize} color={iconColor}  />
                <FaRegMoon className="bar-icons" size={iconSize} color={iconColor}  />
            </div>
        </div>
    )
}

export default ActionBar
