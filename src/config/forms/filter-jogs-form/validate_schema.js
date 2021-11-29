import * as Yup from "yup";

const validateSchema = Yup.object().shape({
    dateFrom: Yup.string()
        .nullable()
        .required('Required'),
    dateTo: Yup.string()
        .nullable()
        .required('Required'),
});

export default validateSchema;