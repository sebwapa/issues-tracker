import "./styles.css";

import React from "react";
import type { InputProps } from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className="input" {...props} />;
});

export default Input;
