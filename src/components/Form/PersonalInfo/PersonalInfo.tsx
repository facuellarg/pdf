import React, { useCallback, useEffect, useMemo, useState } from "react";
import Input from "../../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { personalInfoActions } from "../../../store/persona-info-slice";
import classes from "./PersonalInfo.module.css";
import { RootState } from "../../../store";

const PersonalInfo = () => {
  const [fileInput, setFileInput] = useState("");
  // const [fileName, setFileN]
  const { city, email, jobTitle, country, name, phone } = useSelector(
    (state: RootState) => state.personalInfo
  );

  const fields = [
    {
      id: "name",
      type: "text",
      name: "name",
      label: "Name:",
      value: name,
    },
    {
      id: "email",
      type: "text",
      name: "email",
      label: "Email:",
    },
    {
      id: "jobTitle",
      type: "text",
      name: "jobTitle",
      label: "Job Title:",
    },
    {
      id: "country",
      type: "text",
      name: "country",
      label: "Country:",
    },
    {
      id: "city",
      type: "text",
      name: "city",
      label: "City:",
    },
    {
      id: "phone",
      type: "text",
      name: "phone",
      label: "Phone:",
    },
  ];

  const fileReader = useMemo(() => new FileReader(), []);
  const onload = useCallback((event: ProgressEvent<FileReader>) => {
    if (!event.target) {
      return;
    }
    const { result } = event.target;
    if (!result) {
      return;
    }
    setFileInput(result.valueOf() as string);
  }, []);
  const dispatch = useDispatch();

  const setFieldHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    dispatch(
      personalInfoActions.setField({
        field: target.name,
        value: target.value,
      })
    );
  };
  fileReader.onload = onload;

  const onSelectFile = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    if (!target.files || target.files.length === 0) {
      return;
    }
    fileReader.readAsDataURL(target.files[0]);
  };
  useEffect(() => {
    if (!fileInput) {
      return;
    }

    dispatch(
      personalInfoActions.setField({
        field: "image",
        value: fileInput,
      })
    );
  }, [fileInput, dispatch]);

  return (
    <div className={classes.container}>
      <Input
        id="photo"
        type="file"
        label="Picture: "
        name="photo"
        accept="image/png, image/jpeg"
        onChange={onSelectFile}
      />
      {fields.map((field) => {
        return (
          <Input
            key={field.id}
            id={field.id}
            type={field.type}
            name={field.name}
            label={field.label}
            onChange={setFieldHandler}
          />
        );
      })}
    </div>
  );
};

export default PersonalInfo;
