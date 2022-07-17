function InputField({ label, type, options, name: id, name }) {
  if (type === "radio") {
    return (
      <div className="field-wrapper">
        <p>{label}</p>
        <div className="options-wrapper">
          {options.map((opt) => (
            <div key={opt.value} className="option">
              <label htmlFor={opt.value}>{opt.title}</label>
              <input type={type} id={opt.value} name={name} value={opt.value} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="field-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} />
    </div>
  );
}

export default InputField;
