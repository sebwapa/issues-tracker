export type ButtonVariant = "primary" | "danger" | "success";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children?: React.ReactNode;
  variant: ButtonVariant;
  loading?: boolean;
}
