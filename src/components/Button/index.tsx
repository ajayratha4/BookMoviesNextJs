import React from "react";
import styles from "./styles.module.css";

const Button = ({
  children,
  className = "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl    py-2 px-4 rounded",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: any;
}) => {
  return (
    <div id={styles.ripple} className={className} style={style}>
      {children}
    </div>
  );
};

export default Button;
