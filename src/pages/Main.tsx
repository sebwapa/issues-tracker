import { useLocation } from "wouter";

import Button from "../components/Button";
import Issue from "../components/Issue";

import { useAppSelector } from "../store/hooks";
import "./page.css";

const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation();
  const { issues, status } = useAppSelector((state) => state.issues);

  if (status === "failed") {
    return <div>Failed...</div>;
  }

  if (status !== "loaded") {
    return <div>Loading...</div>;
  }

  return (
    <div className="page main">
      <Button variant="success" onClick={() => setLocation("/add")}>
        Add new issue
      </Button>
      <ul>
        {issues.map((x) => (
          <Issue key={x.id} {...x} />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
