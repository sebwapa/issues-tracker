import { ButtonProps } from "./types";
import Loading from "../Loading";
import { StyledButton } from "./styles";

const Button = ({ children, variant, loading, ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
      {loading && <Loading />}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "primary",
  loading: false,
};

export default Button;
