import { Field, reduxForm } from "redux-form";

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = "Required"
    } else if (values.username.length > 15) {
        errors.username = "Must be 15 chars or less"
    }

    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }

    if (!values.age) {
        errors.age = "Required"
    } else if (Number(values.age) < 18) {
        errors.age = "Must be older than 18"
    }

    return errors;
}


const warn = values => {
    const warnings = {};

    if (values.age < 19) {
        warnings.age = "You seem a bit young"
    }

    return warnings


}




const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)



const SyncValidationForm = (props) => {
    const { handleSubmit, reset } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field name="age" type="number" component={renderField} label="Age" />

            <div>
                <button type="submit">Submit</button>
                <button type="button" onClick={reset}>Clear Values</button>

            </div>

        </form>
    )

}

// const reducer = combineReducers({
//     form: reduxFormReducer
// })

// // communication bw store and reducer
// const store = (SyncValidationForm)({form: '1', validate, warn});


export default reduxForm({
    form: 'syncValidation', validate, warn
})(SyncValidationForm)


