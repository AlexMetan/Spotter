import React from "react";
import { Form, Field } from 'react-final-form';
import formStyle from './../../../../../assets/css/Form.module.css';

const SingleOrderForm = props => {

    const submitClassName = props.orderFormType === 1 ? formStyle.BuyBtn : formStyle.SellBtn;

    return (
    <div className={formStyle.OrderForm+" "+ formStyle.myForm}>
        <div className={formStyle.OrderTypeBtn}>
            <button className={formStyle.FormBtn+' '+formStyle.BuyBtn} onClick={()=>{props.setOrderType(1)}} >
                Buy <span className="ttu">{props.currency}</span>
            </button>
            <button className={formStyle.FormBtn+' '+formStyle.SellBtn} onClick={()=>{props.setOrderType(-1)}}>
                Sell <span className="ttu">{props.currency}</span>
            </button>
        </div>
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="price"  >
                        {({ input, meta }) => (
                        <div>
                            <input {...input} type="number" placeholder="Price" />
                            {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                        </div>
                        )}
                    </Field>                        
                </div>
                <div>
                    <Field name="amount" >
                        {({ input, meta }) => (
                        <div>
                            <input {...input} type="number" placeholder="Amount" />
                            {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                        </div>
                        )}
                    </Field>   
                </div>
                <div>
                    <Field name="total" >
                        {({ input, meta }) => (
                        <div>
                            <input {...input} type="number" placeholder="Total" onInput={e=>{console.log(meta)}}/>
                            {meta.error && meta.touched && <span className={formStyle.formErrorInput}>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="order-type">
                        {() => (<input type="hidden"/>)}
                    </Field>   
                </div>
                <button className={formStyle.FormBtn + ' ' + submitClassName  } type="submit">
                    { props.orderFormType === 1 ? 'Buy ' : 'Sell '} 
                    <span className="ttu">{props.currency}</span>
                </button>
            </form>
            )}
        />
    </div>
    )
}

export default SingleOrderForm;