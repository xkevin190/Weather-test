import * as Yup from 'yup';

export const schema = Yup.object().shape({
    search: Yup.string()
        .matches(/^[A-Za-z]+$/, 'Only letters are allowed')
        .required('Search is required'),
});