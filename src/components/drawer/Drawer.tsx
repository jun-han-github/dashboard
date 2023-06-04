import './Drawer.scss';

type DrawerProp = {
    isOpen: boolean;
    openDrawer: () => void;
}

const Drawer = ({ isOpen, openDrawer }: DrawerProp) => {

    const active = {
        display: isOpen ? 'block' : 'none'
    }

    const handleBackdrop = () => {
        openDrawer();
    }

    return (
        <div>
            <div className="backdrop" style={active} onClick={handleBackdrop}>
            </div>
            <div className={`drawer ${isOpen ? 'open': ''}`}>
                <ul className="drawer-list">
                    <li>Frontend</li>
                    <li>Backend</li>
                    <li>DevOps</li>
                    <li>Cloud</li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer
