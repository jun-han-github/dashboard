import { ChangeEvent } from 'react';
import './BasicTextInput.scss';
import { FaCheck } from 'react-icons/fa';

type TextInputType = {
    name: string;
    header: string;
    input: string;
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BasicTextInput = ({ name, header, input, handleInput }: TextInputType) => {

    return (
        <div className="basic-input">
            <p>{header}</p>
            <div className="input-bar">
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