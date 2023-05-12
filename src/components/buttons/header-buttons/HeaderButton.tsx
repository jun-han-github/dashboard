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
    // Type 'void' is not assignable to type 'MouseEventHandler<HTMLButtonElement> | undefined'.
    <button
      className="header-button"
      onClick={() => handleClick('some')}
    >
        { children }
    </button>
  )
}

export default HeaderButton