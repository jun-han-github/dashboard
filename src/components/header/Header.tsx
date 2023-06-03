import { FaBars, FaUser, FaWhatsapp } from 'react-icons/fa';
import './Header.scss';
import HeaderButton from '../buttons/header-buttons/HeaderButton';

type HeaderProp = {
    handleDrawer: () => void
}

const Header = ({ handleDrawer }: HeaderProp) => {

    const iconSize = 20;

    return (
        <>
            <header>
                <nav>
                    <button className="menu-button" onClick={handleDrawer}><FaBars size={iconSize} /></button>
                    <h2 className="text">Junhan</h2>
                    <HeaderButton text="connect"><FaWhatsapp size={iconSize} color="green" /></HeaderButton>
                    <HeaderButton text="profile"><FaUser size={iconSize} /></HeaderButton>
                </nav>
            </header>
        </>
    )
}

export default Header
