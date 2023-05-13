import { ReactNode } from "react";
import './HeaderButton.scss';

type ButtonProps = {
    text: string,
    children: ReactNode
}

const HeaderButton = ({ text, children }: ButtonProps) => {

  const handleClick = (param: string): void => {
    console.log(param + text);
  }

  return (
    <button
      className="header-button"
      onClick={() => handleClick('some')}
    >
        { children }
    </button>
  )
}

export default HeaderButton