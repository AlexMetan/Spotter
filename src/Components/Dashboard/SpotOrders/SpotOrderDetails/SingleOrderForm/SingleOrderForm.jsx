import React from "react";
import { Form, Field } from 'react-final-form';
import formStyle from './../../../../../assets/css/Form.module.css';

const SingleOrderForm = props => {
    return (
    <Form
        onSubmit={props.onSubmit}
        render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="rate"  >
                    {({ input, meta }) => (
                    <div>
                        <input {...input} type="text" placeholder="exchange rate" />
                        {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                    </div>
                    )}
                </Field>                        
            </div>
            <div>
                <Field name="value_crypto" >
                    {({ input, meta }) => (
                    <div>
                        <input {...input} type="password" placeholder="summ 1" />
                        {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                    </div>
                    )}
                </Field>   
            </div>
            <div>
                <Field name="summary" >
                    {({ input, meta }) => (
                    <div>
                        <input {...input} type="password" placeholder="summ 2" />
                        {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                    </div>
                    )}
                </Field>   
            </div>
            <button type="submit">Login</button>
        </form>
        )}
    />
    )
}

export default SingleOrderForm;