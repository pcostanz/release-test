// Example UI component for testing
// This file will trigger 'frontend' label when modified

import React from "react";

const Button = ({ children, onClick, variant = "primary" }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
