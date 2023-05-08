import React from 'react';

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  width: string;
  height: string;
  radius: string;
  onClick: () => void;

}

 const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width
}) => {
  return (
    <button
    onClick={onClick}
    style={{
      backgroundColor: color,
      border,
      borderRadius: radius,
      height,
      width
    }}
    >
      {children}
    </button>
  );
}

export default Button;
