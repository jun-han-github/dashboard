import { MouseEvent } from 'react';
import './Modal.scss';

type ModalProp = {
    trigger: boolean;
    handleModal: () => void;
    data?: string;
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
                    <p>Hi there, you are about to WhatsApp me!</p>
                </div>
                <div className="actions">
                    <button onClick={() => onConfirm(data)} className="modal-buttons">OK</button>
                    <button onClick={handleModal} className="modal-buttons">CANCEL</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
