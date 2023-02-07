import styled from "styled-components";
import type { ButtonVariant } from "./types";

const variantColor: Record<ButtonVariant, string> = {
  primary: "#007bff",
  success: "#28a745",
  danger: "#dc3545",
};

export const StyledButton = styled.button<{
  variant: ButtonVariant;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;

  background-color: transparent;
  font-weight: 400;
  white-space: nowrap;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }

  color: ${(props) => variantColor[props.variant]};
  border: 1px solid ${(props) => variantColor[props.variant]};

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    color: #fff;
    background-color: ${(props) => variantColor[props.variant]};
    border-color: ${(props) => variantColor[props.variant]};
  }
`;
