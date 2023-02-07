import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "wouter";
import Input from "../components/Input";
import Button from "../components/Button";
import "./addIssue.css";
import "./page.css";
import Label from "../components/Label";
import ErrorNotification from "../components/ErrorNotification";
import { addIssue } from "../store/issuesSlice";
import { useAppDispatch } from "../store/hooks";

const getRandomInt = () => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
};

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

type FormValues = {
  title: string;
  description: string;
};

const AddIssue = () => {
  const [isAdding, setIsAdding] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit = async (data: FormValues) => {
    setIsAdding(true);
    await wait(3000); // mimic server update
    dispatch(
      addIssue({
        id: getRandomInt().toString(),
        title: data.title,
        description: data.description,
        status: "open",
        removingStatus: "idle",
      })
    );
    setLocation("/");
  };

  return (
    <form className="form-wrapper page" onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="title-input">Issue title</Label>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input id="title-input" disabled={isAdding} {...field} />
        )}
      />
      <ErrorNotification isVisible={!!errors.title}>
        Title is required
      </ErrorNotification>

      <Label htmlFor="description-input">Issue description</Label>
      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input id="description-input" disabled={isAdding} {...field} />
        )}
      />
      <ErrorNotification isVisible={!!errors.description}>
        Description is required
      </ErrorNotification>

      <div className="submit-button-wrapper">
        <Button disabled={isAdding} loading={isAdding} type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddIssue;
