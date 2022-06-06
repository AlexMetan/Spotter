import React from "react";
import { Form, Field } from 'react-final-form';
import formStyle from './../../../assets/css/Form.module.css';




const validate = () =>{

}

const LoginForm = props =>{
    const required = value => (value ? undefined : 'Field is required');
    return(
        <div className={formStyle.myForm + " " + formStyle.loginForm }>
            <h2>Log In</h2>
            <Form
                onSubmit={props.onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                    <Field name="login" validate={required} >
                        {({ input, meta }) => (
                        <div>
                            <input {...input} type="text" placeholder="Login" />
                            {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                        </div>
                        )}
                    </Field>                        
                    </div>
                    <div>
                        <Field name="password" validate={required} >
                            {({ input, meta }) => (
                            <div>
                                <input {...input} type="password" placeholder="Password" />
                                {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                            </div>
                            )}
                        </Field>   
                    </div>

                  
                    <button type="submit">Login</button>
                </form>
                )}
            />
            {
                props.loginError ? 
                    <div className={formStyle.formErrorInput +' '+ formStyle.formSubmitError}>
                        Invalid login or password
                    </div>
                : null
            }
            
        </div>
    );
}
export default LoginForm;