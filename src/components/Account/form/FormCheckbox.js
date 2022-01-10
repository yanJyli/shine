function FormCheckbox({ field, form, options, label }) {
    const { errors, setFieldValue } = form;

    function handleChange(event) {
        
        const index = field.value.indexOf(event.target.value);
        if (index === -1) {
            setFieldValue(field.name, [...field.value, event.target.value]);
        } else {
            setFieldValue(
            field.name,
            field.value.filter((i) => i !== event.target.value)
            );
        }
    }

    return (
    <>
        {options ? (
            options.map((option) => (
            <div key={option.value}>
            <input
                {...field}
                type="checkbox"
                id={option.value}
                checked={field.value.includes(option.value)}
                onChange={handleChange}
                value={option.value}
            />
            <label for={option.value}>{option.label}</label>
            </div>
        ))
        ) : (
        <div>
            <input {...field} className="mr-4" type="checkbox" id={field.name} />
            <label for={field.name}>{label}</label>
        </div>
        )}

        {errors[field.name] ? <p className="text-[15px]">{errors[field.name]}</p> : null}
    </>
    );
}

export default FormCheckbox;
