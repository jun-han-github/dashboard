import { MouseEvent } from 'react';
import './Modal.scss';
import { FaCheck, FaExclamation, FaTimes, FaWhatsapp } from 'react-icons/fa';

type ModalProp = {
    trigger: boolean;
    handleModal: () => void;
    data?: {title: string, message: string, url: string};
}

const Icon = (type: string, size = 30) => {
    let icon = null;
    let color = null;

    switch(type) {
        case 'whatsapp':
            color = 'green';
            icon = (<FaWhatsapp size={size} color={color} />);
            break;
        case 'success':
            color = 'green';
            icon = (<FaCheck size={size} color={color} />);
            break;
        case 'failed':
            color = 'red';
            icon = (<FaTimes size={size} color={color} />);
            break;
        case 'warning':
            color = 'orange';
            icon = (<FaExclamation size={size} color={color} />);
            break;
    }

    return (
        <div className="icon-border" style={{
            backgroundImage: `conic-gradient(${color} 0deg, ${color} 36deg, white 36deg)`
        }}>
            <div className="icon">
                { icon }
            </div>
        </div>
    )
}

const Modal = ({ trigger, handleModal, data }: ModalProp) => {

    const active = {
        display: trigger ? 'flex' : 'none'
    }

    const preventModalClose = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }

    const onConfirm = (data?: string) => {
        console.log(data);
    }

    return (
        <div className="backdrop" style={active} onClick={handleModal}>
            <div className={`modal ${trigger ? 'open' : ''}`} onClick={preventModalClose}>
                <div className="content">
                    { Icon('whatsapp') }
                    <h2>{data?.title}</h2>
                    <p>{data?.message}</p>
                </div>
                <div className="actions">
                    <button onClick={() => onConfirm(data?.url)} className="modal-buttons">OK</button>
                    <button onClick={handleModal} className="modal-buttons">CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
