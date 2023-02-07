export interface ErrorNotificationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  children?: React.ReactNode;
  isVisible: boolean;
}
