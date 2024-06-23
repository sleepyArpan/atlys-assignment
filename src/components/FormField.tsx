type FormFieldProps = {
  fieldLabel: string;
  fieldName: string;
  placeholder: string;
  className?: string;
  inputType?: string;
};

export default function FormField({
  fieldName,
  fieldLabel,
  placeholder,
  className = '',
  inputType,
}: FormFieldProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={fieldName}
        className='font-medium text-gray-300 mb-2 text-sm'>
        {fieldLabel}
      </label>
      <input
        id={fieldName}
        name={fieldName}
        placeholder={placeholder}
        {...(inputType && { type: inputType })}
        className='bg-gray-500 border-2 border-[#35373B] w-full h-11 p-3 rounded text-white'
      />
    </div>
  );
}
