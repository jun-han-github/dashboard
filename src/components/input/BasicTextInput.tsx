import { ChangeEvent, useEffect, useState } from 'react';
import './BasicTextInput.scss';
import { FaCheck } from 'react-icons/fa';

type TextInputType = {
    name: string;
    header: string;
    input: string;
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
    checkError: boolean;
}

const BasicTextInput = ({ name, header, input, handleInput, checkError }: TextInputType) => {

    const [color, setColor] = useState('orange');

    useEffect(() => {
            setColor(checkError && input === '' ? 'red' : 'orange');
    }, [input, checkError])

    return (
        <div className="basic-input">
            <p>{header}</p>
            <div
                className="input-bar"
                style={{ borderColor: color, backgroundColor: color }}
            >
                <input
                    type="text"
                    name={name}
                    value={input.replace(/[^a-zA-Z0-9,.&?!@#$-+ ]/g, '')}
                    onChange={handleInput}
                />
                <div className="input-icon">
                    <div className="icon-bg" style={{ backgroundColor: input ? 'green' : 'lightgrey' }}>
                        <FaCheck size={12} color={'white'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicTextInput