import { FaBars, FaPhone, FaUser } from 'react-icons/fa';
import './Header.scss';
import HeaderButton from '../buttons/header-buttons/HeaderButton';

type HeaderProp = {
    handleDrawer: () => void
}

const Header = ({ handleDrawer }: HeaderProp) => {

    return (
        <>
            <header>
                <nav>
                    <button className="menu-button" onClick={handleDrawer}><FaBars /></button>
                    <h2 className="text">Junhan</h2>
                    <HeaderButton text="connect"><FaPhone /></HeaderButton>
                    <HeaderButton text="profile"><FaUser /></HeaderButton>
                </nav>
            </header>
        </>
    )
}

export default Header