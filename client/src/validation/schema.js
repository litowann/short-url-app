import * as Yup from 'yup';

export const urlValidationSchema = Yup.object().shape({
    url: Yup.string()
        .required("URL is required")
        .matches(
            /(https?:\/\/?\S+)/,
            'Enter a valid url'
        )
})