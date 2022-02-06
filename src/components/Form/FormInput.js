function FormInput({ form, field, label, type = "text" }) {
  const { errors } = form;

  return (
    <div className="mb-2">
      <label className="max-w-screen-lg grid">{label}</label>
      <input
        className="ml-4 border rounded border-gray-300 hover:bg-amber-50"
        type={type}
        {...field}
      />
      {errors[field.name] ? (
        <p className="text-[15px]">{errors[field.name]}</p>
      ) : null}
    </div>
  );
}

export default FormInput;
