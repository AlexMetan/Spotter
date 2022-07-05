import React from "react";
import { Form, Field } from 'react-final-form';
import formStyle from './../../../../assets/css/Form.module.css';

const DepositForm = props => {
    return(
        <div className={formStyle.myForm}>
            <Form
                onSubmit={props.onSubmit}
                validate={''}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                        <Field name="amount" validate={''} >
                            {({ input, meta }) => (
                            <div>
                                <input {...input} type="number" placeholder="USDT Amount" />
                                {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>                        
                        </div>
                        <button type="submit" className={formStyle.FormBtn}>Deposit</button>
                    </form>
                )}
            />
   
        </div>
    );
}
export default DepositForm;