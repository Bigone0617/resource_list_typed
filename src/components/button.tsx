import React, { CSSProperties } from "react";

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;    
}

const buttonStyle : CSSProperties = {
    width: "150px",
    height: "35px",
    backgroundColor: "transparent",
    border: "1.5px solid #E8E8E8",
    borderRadius: "5px"
};

const Button: React.FC<ButtonProps> = (props) => {
    const {children, onClick} = props;
    return (
        <button
            onClick={onClick}
            style = {buttonStyle}
        >
            {children}
        </button>
    );
};

export default Button;