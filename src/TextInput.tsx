interface Props {
  title?: string;
  label?: string;
  placeholder?: string;
  register: () => any
}

const TextInput: React.FC<Props> = ({ title, label, placeholder, register, ...rest }: Props) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={title}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative mt-2">
        {title && (
          <>
            <input
              type="text"
              name={title}
              id={title}
              className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              {...(placeholder ? { placeholder } : {})}
              {...register(title)}
            />
            <div
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TextInput;
