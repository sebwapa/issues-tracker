import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import type { IssueProps } from "./types";
import type { IssueStatus } from "../../types";
import cn from "classnames";
import { useAppDispatch } from "../../store/hooks";
import { changeIssueStatus, removeIssueAction } from "../../store/issuesSlice";

const indicatorClasses: Record<IssueStatus, string> = {
  open: "indicator-open",
  pending: "indicator-pending",
  closed: "indicator-closed",
};

const Issue = ({
  title,
  status,
  description,
  id,
  removingStatus,
}: IssueProps) => {
  const dispatch = useAppDispatch();
  const removing = removingStatus === "inProgress" || removingStatus === "done";
  return (
    <li className="issue">
      <div className={cn("indicator", indicatorClasses[status])} />
      <div className="left">
        <div>{title}</div>
        <div className="status">Status: {status}</div>
        <div className="description">{description}</div>
      </div>
      <div className="right">
        <Button disabled onClick={() => dispatch(changeIssueStatus(id))}>
          Open
        </Button>
        <Button
          disabled={status === "pending" || status === "closed" || removing}
          onClick={() => dispatch(changeIssueStatus(id))}
        >
          Pending
        </Button>
        <Button
          disabled={status === "open" || status === "closed" || removing}
          onClick={() => dispatch(changeIssueStatus(id))}
        >
          Closed
        </Button>
        <Button
          loading={removing}
          disabled={removing}
          variant="danger"
          onClick={() => dispatch(removeIssueAction(id))}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </div>
    </li>
  );
};

export default Issue;
