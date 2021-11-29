import * as Yup from "yup";

const validateSchema = Yup.object().shape({
    time: Yup.number()
        .min(1, 'Time should be greater than 0.')
        .required('Required'),
    distance: Yup.number()
        .min(1, 'Distance should be greater than 0.')
        .required('Required'),
    date: Yup.date()
        .nullable()
        .required('Required'),
});

export default validateSchema;