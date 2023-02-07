export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "className"> {
  children?: React.ReactNode;
}
