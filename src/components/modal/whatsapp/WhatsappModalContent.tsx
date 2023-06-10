import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

type MessageProp = {
    id: number,
    selected: boolean,
    message: string
}

type ModalContentProp = {
    setNewUrl: (url: string) => void;
}

const WhatsappModalContent = ({ setNewUrl }: ModalContentProp) => {
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


    const [initialMessage, setInitialMessage] = useState(messageTemplates[0].message);
    const [messages, setMessages] = useState(messageTemplates);

    useEffect(() => {
        setNewUrl(initialMessage);
    }, [initialMessage, setNewUrl]);

    const _addInitialMessage = (id: number, selected: boolean) => {

        messages.forEach((template) =>
            template.selected = (template.id === id) ? !selected : false);

        const template = messages.find(template => template.selected && template.id === id);

        if (template) setInitialMessage(template?.message);
        else setInitialMessage('');

        setMessages(messages);
        setNewUrl(initialMessage);
    };

    const MessageItem = (template: MessageProp) => (
        <div
            className="template-message"
            style={{
                borderColor: template.selected ? 'green' : 'lightgrey',
                backgroundColor: template.selected ? '#D8F3DC' : 'white',
            }}
            onClick={() => _addInitialMessage(template.id, template.selected)}
        >
            <p>{template.message}</p>
            <div className="checkmark">
                <FaCheckCircle color={template.selected ? 'green' : 'transparent'} />
            </div>
        </div>
    )

    return (
        <>
            {
                messages.map((template: MessageProp) => {
                    return (
                        <MessageItem key={template.id} {...template} />
                    )
                })
            }
        </>
    )
}
export default WhatsappModalContent
