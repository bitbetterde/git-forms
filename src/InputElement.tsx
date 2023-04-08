import type { InputElementState } from "./types/InputElementState";
import { TrashIcon, Bars2Icon } from "@heroicons/react/24/outline";

interface Props {
  id: string;
  value: InputElementState;
  onClickDelete: (id: string) => void;
  onChange: (newValue: InputElementState) => void;
}

const InputElement: React.FC<Props> = ({ id, onClickDelete, value, onChange }: Props) => {
  return (
    <div draggable className="border px-4 py-2 rounded-md grid grid-cols-12 gap-x-2 gap-y-8">
      <div className="col-span-3">
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

      <div className="col-span-4">
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
              onChange({ ...value, identifier: e.target.value });
            }}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="col-span-4">
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
              onChange({ ...value, label: e.target.value });
            }}
            type="text"
            name="labelInput"
            id="labelInput"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button
          onClick={() => onClickDelete(id)}
          className="text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-200 p-2"
          type="button"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
        <button
          className="text-gray-500 hover:text-gray-800 rounded-full p-2 cursor-move"
          type="button"
        >
          <Bars2Icon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default InputElement;
