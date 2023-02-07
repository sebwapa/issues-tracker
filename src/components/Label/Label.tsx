import { LabelProps } from "./types";
import "./styles.css";

const Label = ({ children, ...rest }: LabelProps) => {
  return (
    <label className="form-label" {...rest}>
      {children}
    </label>
  );
};

export default Label;
