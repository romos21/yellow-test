import React from 'react';
import './InputField.scss';

import ErrorMessageBlock from "../ErrorMessageBlock/ErrorMessageBlock";

const InputField = (props) => {
    const {label, type, form: {handleChange, errors, touched}, field: {name, value}} = props;
    console.log(name, value);
    return (
        <label className="form-field">
            {label}
            <input
                name={name}
                type={type}
                value={value}
                onChange={handleChange(name, value)}
            />
            {
                errors[name] && touched[name]
                    ? <ErrorMessageBlock message={errors[name]}/>
                    : null
            }
        </label>
    );
}

export default InputField;
