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
        <>
            <div className={`backdrop`} style={active} onClick={handleBackdrop}>
            </div>
            <div className={`drawer ${isOpen ? 'open': ''}`}>
                <ul>
                    <li>Frontend</li>
                    <li>Backend</li>
                    <li>DevOps</li>
                    <li>Cloud</li>
                </ul>
            </div>
        </>
    )
}

export default Drawer