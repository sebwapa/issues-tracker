import { ErrorNotificationProps } from "./types";
import "./styles.css";

const ErrorNotification = ({
  children,
  isVisible,
  ...rest
}: ErrorNotificationProps) => {
  return (
    <>
      {isVisible && (
        <div className="error-notification" {...rest}>
          {children}
        </div>
      )}
    </>
  );
};

export default ErrorNotification;
