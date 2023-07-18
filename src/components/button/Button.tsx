import React from "react";
import "./button.css";

interface ButtonProps {
  type?: string;
  children: string | number;
  plain: boolean;
  round: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, plain, round } = props;
  let background = "";

  switch (type) {
    case "primary":
      background = "#3f9eff";
      break;
    case "success":
      background = "#67c23a";
      break;
    case "info":
      background = "#909399";
      break;
    case "warning":
      background = "#e6a23c";
      break;
    case "danger":
      background = "#f56c6c";
      break;
    default:
      background = "#171818";
  }
  const bgBtn = {
    padding: " 8px 16px",
    border: `1px solid ${background}`,
    background: type && !plain ? background : "transparent",
    borderRadius: round ? "100px" : "4px",
    color: "white",
  };
  return (
    <div className="button" style={bgBtn}>
      {children}
    </div>
  );
};

export default Button;
