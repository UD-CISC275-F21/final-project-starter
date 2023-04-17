import * as yup from "yup";

export const currentYear = new Date().getFullYear();
export const schema = yup.object().shape({
    title: yup
        .string()
        .required("Title is required")
        .typeError("Title has to be a string"),
    yearReleased: yup
        .number()
        .positive("Year Released has to be positive")
        .integer("Year Relased has to be a whole number")
        .min(1950, "Year Released has to be greater than or equal to 1950")
        .max(
            currentYear,
            `Year Released has to be less than or equal to ${currentYear}`
        )
        .required("Year Released is required")
        .typeError("Year Released has to be a number"),
    rating: yup
        .number()
        .positive("Rating has to be positive")
        .min(0, "Rating has to be greater than or equal to 0")
        .max(5, "Rating has to be less than or equal to 5")
        .required("Rating is required")
        .typeError("Rating has to be a number"),
    type: yup.string().required(),
    image: yup.string().required("Image address is required")
});