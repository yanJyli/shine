function FormInput ({form, field, label, type='text'}) {
    const {errors} = form;

    return <div>
        <label>{label}</label>
        <input type={type} {...field}/>
        {errors[field.name] ? <p>{errors[field.name]}</p> : null}
    </div>
}

export default FormInput;