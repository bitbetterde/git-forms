import { useEffect, useState } from "react";
import InputElement from "./InputElement";
import type { InputElementState } from "./types/InputElementState";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { nanoid } from "nanoid";

const createIssue = (title: string, content: unknown) => {
  const body = JSON.stringify({ title, body: content });
  console.log(body);
  const options = {
    method: "POST",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + import.meta.env.GITHUB_TOKEN,
    },
    body,
  };

  fetch("https://api.github.com/repos/pReya/forms-test/issues", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

interface Props {
  value: Array<InputElementState>;
  onSubmit: (formData: Array<InputElementState>, event: any) => void;
}

const DynamicForm: React.FC<Props> = ({ value, onSubmit }: Props) => {
  const [formData, setFormData] = useState<Array<InputElementState>>(value);

  useEffect(() => {
    Boolean(value.length) && setFormData(value);
  }, [value]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => onSubmit(formData, e)}
    >
      {Boolean(formData.length) &&
        formData.map((input, index) => {
          return (
            <InputElement
              onClickDelete={(id) => {
                setFormData(formData.filter((el) => el.id !== id));
              }}
              onChange={(newValue) => {
                const clonedFormData = JSON.parse(JSON.stringify(formData));
                clonedFormData[index] = newValue;
                setFormData(clonedFormData);
              }}
              value={input}
              key={input.id}
              id={input.id}
            />
          );
        })}
      {formData.length === 0 && (
        <div className="rounded-md bg-gray-100 border-2 border-dashed border-gray-300 p-4">
          No inputs defined, yet
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <div>
          <button
            type="button"
            className="flex items-center gap-1 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-semibold leading-6 text-gray-900"
            onClick={() => {
              setFormData([
                ...formData,
                {
                  type: "text",
                  identifier: "",
                  value: "",
                  label: "",
                  id: nanoid(5),
                },
              ]);
            }}
          >
            <PlusCircleIcon className="h-6 w-6" />
            Add
          </button>
        </div>
        <div className="flex gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default DynamicForm;
