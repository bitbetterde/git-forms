import { useEffect, useState } from "react";
import type { InputElementState } from "./types/InputElementState";

interface Props {
  title?: string;
  label?: string;
  placeholder?: string;
  register: () => any;
}

const InputElement: React.FC= () => {
  const [value, setValue] = useState<InputElementState>({
    type: "text",
    label: "",
    identifier: "",
  });

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="border px-4 py-2 rounded-md grid grid-cols-12 gap-x-6 gap-y-8">
      <div className="col-span-2">
        <label
          htmlFor="typeInput"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Type
        </label>
        <div className="mt-2">
          <input
            disabled
            name="typeInput"
            id="typeInput"
            type="text"
            value="Text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-gray-100"
          />
        </div>
      </div>

      <div className="col-span-5">
        <label
          htmlFor="identifierInput"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Identifier
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="identifierInput"
            id="identifierInput"
            value={value?.identifier}
            onChange={(e) => {
              setValue({ ...value, identifier: e.target.value });
            }}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="col-span-5">
        <label
          htmlFor="labelInput"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Label
        </label>
        <div className="mt-2">
          <input
            value={value?.label}
            onChange={(e) => {
              setValue({ ...value, label: e.target.value });
            }}
            type="text"
            name="labelInput"
            id="labelInput"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

export default InputElement;
