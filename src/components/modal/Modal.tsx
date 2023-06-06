import { MouseEvent, useEffect, useRef, useState, ReactNode } from 'react';
import './Modal.scss';
import { FaCheck, FaCheckCircle, FaExclamation, FaTimes, FaWhatsapp } from 'react-icons/fa';

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
            color.current = '#FF9494';
            icon.current = (<FaTimes size={size} color={color.current} />);
            break;
        case 'warning':
            color.current = 'orange';
            icon.current = (<FaExclamation size={size} color={color.current} />);
            break;
    }

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setBorderColor(color.current);
    //     }, 800);
    
    //     return () => clearTimeout(timeout);
    // }, []);

    return (
        <div className="icon-border" style={{
            background: `${color.current}`
            // backgroundImage: `conic-gradient(${color.current} 0deg, ${color.current} 36deg, ${borderColor} 36deg)`
        }}>
            <div className="icon">
                { icon.current }
            </div>
        </div>
    )
}

const Modal = ({ trigger, handleModal, data }: ModalProp) => {

    const messageTemplates = [
        {
            id: 1,
            selected: true,
            message: 'Hi, I am a recruiter and I have a job opportunity for you.',
        },
        {
            id: 2,
            selected: false,
            message: 'Hi, I am a developer and I would like to connect with you.',
        },
        {
            id: 3,
            selected: false,
            message: 'Hi, I am just looking to network casually!',
        },
    ];

    const [initialMessage, setInitialMessage] = useState('?text=' + messageTemplates[0].message);
    const [messages, setMessages] = useState(messageTemplates);

    const active = {
        display: trigger ? 'flex' : 'none'
    }

    const preventModalClose = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }

    const onConfirm = (data?: string) => {
        window.open(data, '_blank')
    }

    const _addInitialMessage = (id: number, selected: boolean) => {

        messages.forEach((template) => 
            template.selected = (template.id === id) ? !selected : false);

        const template = messages.find(template => template.selected && template.id === id);

        if (template) setInitialMessage('?text=' + template?.message);
        else setInitialMessage('');

        setMessages(messages);
    };

    return (
        <div className="backdrop" style={active} onClick={handleModal}>
            <div className={`modal ${trigger ? 'open' : ''}`} onClick={preventModalClose}>
                <div className="content">
                    { Icon(data?.iconType) }
                    <h2>{data?.title}</h2>
                    <p>{data?.message}</p>
                    {
                        messages.map((template: {id: number, selected: boolean, message: string}) => {
                            return (
                                <div 
                                    className="template-message"
                                    style={{ 
                                        borderColor: template.selected ? 'green' : 'lightgrey',
                                        backgroundColor: template.selected ? '#D8F3DC' : 'white',
                                    }}
                                    key={template.id} 
                                    onClick={() => _addInitialMessage(template.id, template.selected)}
                                >
                                    <p>{template.message}</p>
                                    <div className="checkmark">
                                        <FaCheckCircle color={template.selected ? 'green' : 'transparent'} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="actions">
                    <button onClick={() => onConfirm(data?.url + initialMessage)} className="modal-buttons">OK</button>
                    <button onClick={handleModal} className="modal-buttons">CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
