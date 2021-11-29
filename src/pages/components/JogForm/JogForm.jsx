import React from 'react';
import './JogForm.scss';
import {Formik, Form, Field} from "formik";
import jogsListService from "../../../services/jogsList";
import DatePickerField from "../DatePickerField/DatePickerField";
import InputField from "../InputField/InputField";
import {Link, useNavigate} from "react-router-dom";
import formConfig from "../../../config/forms/add-jog-form";
import paths from "../../../config/router/paths";

const JogForm = (props) => {
    const {token, jog, buttonText="Submit", actionType="post"} = props;
    const navigate = useNavigate();
    const submitForm = async values => {
        switch (actionType) {
            case "post": await jogsListService.addJog(values, token); break;
            case "put": await jogsListService.updateJog(values, token); break;
            default: console.log("Undefined action");
        }
        navigate(paths.jogs);
    }

    return (
        <div className="common-container JogForm">
            <Link to={paths.jogs}>
                <svg className='cancel-icon'>
                    <use href='#cancel'/>
                </svg>
            </Link>
            <Formik
                initialValues={jog ? jog : formConfig.initialState}
                validationSchema={formConfig.validateSchema}
                onSubmit={submitForm}
            >
                <Form className='form-container'>
                    <Field label='time' name="time" type="number" component={InputField}/>
                    <Field label='distance' name="distance" type="number" component={InputField}/>
                    <DatePickerField label='date' name="date"/>
                    <button className="btn" type='submit'>{buttonText}</button>
                </Form>
            </Formik>
        </div>
    );
}

export default JogForm;
