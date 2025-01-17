import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
    return <button onClick={onClick}>{children}</button>;
};

export default Button;
