import React from "react";
import styles from "./styles.module.css";

const Button = ({
  children,
  onClick,
  className = "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl    py-2 px-4 rounded",
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: any;
}) => {
  return (
    <div
      onClick={onClick && onClick}
      id={styles.ripple}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

export default Button;
