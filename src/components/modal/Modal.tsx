import { MouseEvent, useRef, useState, ReactNode } from 'react';
import './Modal.scss';
import { FaCheck, FaExclamation, FaRegFilePdf, FaTimes, FaWhatsapp } from 'react-icons/fa';
import WhatsappModalContent from './whatsapp/WhatsappModalContent';

type ModalProp = {
    trigger: boolean;
    handleModal: () => void;
    data: {iconType: string, title: string, message: string, url: string};
}

const Icon = (type: string, size = 30) => {
    const color = useRef('');
    const icon = useRef<ReactNode | null>(null);

    switch(type) {
        case 'failed':
            color.current = '#FF9494';
            icon.current = (<FaTimes size={size} color={color.current} />);
            break;
        case 'pdf':
            color.current = 'maroon';
            icon.current = (<FaRegFilePdf size={size} color={color.current} />);
            break;
        case 'success':
            color.current = '#4BB543';
            icon.current = (<FaCheck size={size} color={color.current} />);
            break;
        case 'warning':
            color.current = 'orange';
            icon.current = (<FaExclamation size={size} color={color.current} />);
            break;
        case 'whatsapp':
            color.current = 'green';
            icon.current = (<FaWhatsapp size={size} color={color.current} />);
            break;
    }

    return (
        <div className="icon-border" style={{ background: color.current }}>
            <div className="icon">
                { icon.current }
            </div>
        </div>
    )
}

const Modal = ({ trigger, handleModal, data }: ModalProp) => {

    const baseUrl = data.url;
    const [url, setUrl] = useState('');

    const setNewUrl = (newState: string) => {
        setUrl(newState);
    }

    const active = {
        display: trigger ? 'flex' : 'none'
    }

    const preventModalClose = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }

    const _onConfirm = (url: string) => {
        // its either pdf or whatsapp for now - 29 June 2023
        if (data.iconType === 'pdf') {
            const link = document.createElement('a');
            link.href = "./assets/data/LiuJunHan_CV_LS.pdf";
            link.download = "LiuJunHan_CV_LS.PDF";
            link.click();
        } else {
            window.open(url, '_blank')
        }

        handleModal();
    }

    return (
        <div className="backdrop" style={active} onClick={handleModal}>
            <div className={`modal ${trigger ? 'open' : ''}`} onClick={preventModalClose}>
                <div className="content">
                    { Icon(data?.iconType) }
                    <h2>{data?.title}</h2>
                    <p>{data?.message}</p>
                    {
                        data.iconType === 'whatsapp' &&
                        <WhatsappModalContent setNewUrl={setNewUrl} />
                    }
                </div>
                <div className="actions">
                    <button onClick={() => _onConfirm(baseUrl + url)} className="modal-buttons">OK</button>
                    <button onClick={handleModal} className="modal-buttons">CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
