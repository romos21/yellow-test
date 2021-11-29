import React from 'react';
import './DatePickerField.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useField, useFormikContext} from "formik";
import ErrorMessageBlock from "../ErrorMessageBlock/ErrorMessageBlock";

const DatePickerField = ({...props}) => {

    const {name, label, submitIfChanged = false} = props;
    const [field] = useField(name);
    const {setFieldValue, submitForm, errors} = useFormikContext();

    const handleOnChange = async value => {
        setFieldValue(field.name, value);
    }

    const handleOnBlur = async () => {
        if (submitIfChanged) {
            await submitForm();
        }
    }

    return (
        <label className="form-field">
            {label}
            <DatePicker
                name={field.name}
                dateFormat="dd/MM/yyyy"
                selected={field.value}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
            />
            {
                errors[name]
                    ? <ErrorMessageBlock message={errors[name]}/>
                    : null
            }
        </label>
    );
}

export default DatePickerField;
