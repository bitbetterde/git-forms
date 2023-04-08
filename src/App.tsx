import { useState } from "react";
import InputElement from "./InputElement";
import TextInput from "./TextInput";
import type { InputElementState } from "./types/InputElementState";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

// GitHub Token: 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

const createIssue = (title: string, content: unknown) => {
  const body = JSON.stringify({ title, body: content });
  console.log(body);
  const options = {
    method: "POST",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    },
    body,
  };

  fetch("https://api.github.com/repos/pReya/forms-test/issues", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data) => {
    const entries = Object.entries(data)
      .map(([key, value]) => `**${key}**: ${value}`)
      .join("\n");
    createIssue("New Form", entries);
  };
  const [formData, setFormData] = useState<Array<InputElementState | null>>([
    null,
  ]);

  return (
    <main>
      <h1 className="text-2xl font-bold my-6">Build your form</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {Boolean(formData.length) &&
          formData.map((input, index) => {
            return <InputElement key={index} />;
          })}

        <div className="mt-6 flex items-center justify-between">
          <div>
            <button
              type="button"
              className="hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-semibold leading-6 text-gray-900"
              onClick={() => {
                setFormData([...formData, null]);
              }}
            >
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
    </main>
  );
}

export default App;
