import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { fetchInitialIssuesAction } from "./store/issuesSlice";

import "./App.css";
import { Route } from "wouter";

import MainPage from "./pages/Main";
import AddIssue from "./pages/AddIssue";

const App = () => {
  const { status } = useAppSelector((state) => state.issues);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === "notInitialized") {
      dispatch(fetchInitialIssuesAction());
    }
  }, [dispatch, status]);

  return (
    <div className="App">
      <Route path="/add" component={AddIssue} />
      <Route path="/" component={MainPage} />
    </div>
  );
};

export default App;
