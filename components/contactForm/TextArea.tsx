interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    value?: string;
    type?: string;
    error?: boolean;
    errorMessage?: string;
}
const TextArea = ({
    id,
    name,
    label,
    placeholder,
    value,
    error,
    errorMessage,
    ...props
}: TextAreaProps) => {
    return (
        <div className="mt-4 block">
            <label className="mb-3 block" htmlFor={id}>
                {label}
            </label>
            <textarea
                {...props}
                value={value}
                id={id}
                name={name}
                rows={5}
                placeholder={placeholder}
                className="block w-full resize-none rounded-md border-2 border-lightBlue pl-7 pt-4 shadow-md sm:text-sm"
            ></textarea>
            {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
        </div>
    );
};
export default TextArea;
