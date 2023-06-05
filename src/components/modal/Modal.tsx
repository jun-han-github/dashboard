import { MouseEvent, useEffect, useRef, useState, ReactNode } from 'react';
import './Modal.scss';
import { FaCheck, FaExclamation, FaTimes, FaWhatsapp } from 'react-icons/fa';

type ModalProp = {
    trigger: boolean;
    handleModal: () => void;
    data: {iconType: string, title: string, message: string, url: string};
}

const Icon = (type: string, size = 30) => {
    const color = useRef('');
    const icon = useRef<ReactNode | null>(null);

    const [borderColor, setBorderColor] = useState<string>('white');

    switch(type) {
        case 'whatsapp':
            color.current = 'green';
            icon.current = (<FaWhatsapp size={size} color={color.current} />);
            break;
        case 'success':
            color.current = '#4BB543';
            icon.current = (<FaCheck size={size} color={color.current} />);
            break;
        case 'failed':
            color.current = 'red';
            icon.current = (<FaTimes size={size} color={color.current} />);
            break;
        case 'warning':
            color.current = 'orange';
            icon.current = (<FaExclamation size={size} color={color.current} />);
            break;
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBorderColor(color.current);
        }, 500);
    
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="icon-border" style={{
            backgroundImage: `conic-gradient(${color.current} 0deg, ${color.current} 36deg, ${borderColor} 36deg)`
        }}>
            <div className="icon">
                { icon.current }
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
                    { Icon(data?.iconType) }
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
