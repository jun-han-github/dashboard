import { FaBars, FaPhone, FaUser } from 'react-icons/fa';
import './Header.scss';
import HeaderButton from '../buttons/header-buttons/HeaderButton';

const Header = () => {

    return (
        <header>
            <nav>
                <HeaderButton text="menu"><FaBars /></HeaderButton>
                <h2 className="text">Junhan</h2>
                <HeaderButton text="connect"><FaPhone /></HeaderButton>
                <HeaderButton text="profile"><FaUser /></HeaderButton>
            </nav>
        </header>
    )
}

export default Header