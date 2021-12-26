import React, { Component } from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';

import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class FormLab extends Component {
    render() {
        return <Formik 
        initialValues={{
            username:"",
            email:"",
            password:"",
            repeatPassword:"",
            termsAndConditions: false
        }} 
            onSubmit={(formValues) => alert (JSON.stringify(formValues))}

            validationSchema = {Yup.object().shape({
                username: Yup.string().required('name is required').max(20, 'name should be less then 20 characters'),
                email: Yup.string().email('email should be in correct format').required('email is required'),
                password: Yup.string().matches(passwordRegex, 'password should be more then 8 characters ahd contain at least number and one letter').required('password is required'),
                repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password shuold match').required('password shuold match'),
                termsAndConditions: Yup.boolean().isTrue('you should accept ourterms and conditions')
            })}

        >
        { ({isValid}) => (
            <Form>
                <Field name="username" component={FormInput} label="Name"/>
                <Field name="email" component={FormInput} label="Email"/>
                <Field name="password" component={FormInput} label="Password" type="password"/>
                <Field name="repeatPassword" component={FormInput} label="Repeat password" type="password"/>
                <Field component={FormCheckbox} label="I Agree with Terms and Conditions" name="termsAndConditions"/>
                <button type="submit"  disabled={!isValid}>Submit</button>
            </Form>)}
        </Formik>
    }
}