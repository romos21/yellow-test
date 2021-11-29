import React from 'react';
import './JogFilterForm.scss';
import {Formik, Form} from "formik";
import DatePickerField from "../../components/DatePickerField/DatePickerField";
import jogsListService from '../../../services/jogsList';
import {connect} from "react-redux";
import {actions} from "../../../redux/actions";
import formConfig from "../../../config/forms/filter-jogs-form";

const JogFilterForm = (props) => {

    const {token, jogsListSet, loaderViewChange} = props;

    const onSubmitHandler = async values => {
        loaderViewChange();
        const jogs = await jogsListService.filterJogs(token, values);
        jogsListSet(jogs);
        loaderViewChange();
    }

    return (
        <Formik
            initialValues={formConfig.initialState}
            validationSchema={formConfig.validateSchema}
            onSubmit={onSubmitHandler}
        >
            <Form className='form-wrapper'>
                <DatePickerField name="dateFrom" label="Date from" submitIfChanged={true}/>
                <DatePickerField name="dateTo" label="Date to" submitIfChanged={true}/>
            </Form>
        </Formik>
    );
}

const mapDispatchToProps = {
    jogsListSet: actions.jogsListActions.jogsListSet,
    loaderViewChange: actions.loaderActions.loaderViewChange,
};

export default connect(null, mapDispatchToProps)(JogFilterForm);
