import React from "react";
import styles from "./styles.module.css";

const Button = ({
  children,
  className = "bg-primary  hover:bg-blue-700 dark:text-white py-2 px-4 rounded",
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
