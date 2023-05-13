import './Drawer.scss';

type DrawerProp = {
    isOpen: boolean;
}

const Drawer = ({ isOpen }: DrawerProp) => {

    console.log('click: ', isOpen);

    const active = {
        display: isOpen ? 'none': 'block'
    }

    return (
        <div className="drawer" style={active}>
            <ul>
                <li>Page 1</li>
                <li>Page 2</li>
                <li>Page 3</li>
                <li>Page 4</li>
                <li>Page 5</li>
            </ul>
        </div>
    )
}

export default Drawer